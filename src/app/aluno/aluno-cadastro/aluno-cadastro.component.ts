import { Component, OnInit } from '@angular/core';
import { Aluno, Representante } from '../aluno';
import { AlunoService } from '../aluno.service';
import { MessageService } from 'primeng/api';
import { catchError, of } from 'rxjs';
import { RepresentanteService } from '../../representante/representante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone : false,
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrl: './aluno-cadastro.component.scss'
})
export class AlunoCadastroComponent implements OnInit {

  aluno : Aluno;
  series: any[] = [];
  filteredSeries: any[] = [];
  representantes : Representante[] = [];
  representantesSelecionados : Representante[] = [];
  id : any;

  constructor(
    private alunoService : AlunoService,
    private messageService : MessageService,
    private representanteService : RepresentanteService,
    private activatedRoute : ActivatedRoute
  ) {
    this.aluno = new Aluno();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.buscarAlunoPorId();
    } else {
      this.listarSeries();
      this.listarRepresentantes();
    }
  }

  onSubmit(form : any) {
    if(this.id) {
      this.editarAluno();
    } else {
      this.salvarAluno(form);
    }
  }  

  buscarEndereco() {
    this.alunoService.buscarCep(this.aluno.endereco.cep).subscribe(response => {
      if (response.erro) {
        this.messageService.add({
          severity: 'error',
          summary: 'Cep inválido',
          detail: 'Cep inválido'
        });
        this.aluno.endereco.bairro = '';
        this.aluno.endereco.cidade = '';
        this.aluno.endereco.estado = '';
        this.aluno.endereco.rua = '';  
      } else {
        this.aluno.endereco.bairro = response.bairro;
        this.aluno.endereco.cidade = response.localidade;
        this.aluno.endereco.estado = response.uf;
        this.aluno.endereco.rua = response.logradouro;   
      } 
    });
  }

  listarSeries() {
    this.series = [
      { label: 'Primeiro Ano', value: 'PRIMEIRO_ANO' },
      { label: 'Segundo Ano',  value: 'SEGUNDO_ANO' },
      { label: 'Terceiro Ano', value: 'TERCEIRO_ANO' },
      { label: 'Quarto Ano',   value: 'QUARTO_ANO' },
      { label: 'Quinto Ano',   value: 'QUINTO_ANO' }
    ];
  }

  searchSeries(event: any) {
    const query = event.query.toLowerCase();

    this.filteredSeries = this.series.filter(s =>
      s.label.toLowerCase().includes(query)
    );
  }

  listarRepresentantes(callback?: () => void) {
    this.representanteService.listarRepresentantes()
      .pipe(
        catchError(err => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao carregar representantes',
            detail: 'Não foi possível carregar a lista de representantes'
          });
          return of([]);
        })
      )
      .subscribe(response => {
        this.representantes = response || [];
        if (callback) callback();
      });
  }

  marcarRepresentantesDoAluno() {
    if (!this.aluno || !this.aluno.representantes) return;

    this.representantesSelecionados = this.representantes.filter(rep =>
      this.aluno.representantes.some(ar => ar.id === rep.id)
    );
  }

  onSelecionarRepresentantes() {
    this.aluno.representantes = this.representantesSelecionados.map(r => ({
      id: r.id
    }));
  }

  onDataNascimentoChange(event: Date) {
    if (event) {
      const dia = String(event.getDate()).padStart(2, '0');
      const mes = String(event.getMonth() + 1).padStart(2, '0');
      const ano = event.getFullYear();

      this.aluno.dataNascimento = `${dia}/${mes}/${ano}`;
    }
  }

  salvarAluno(form : any) {
    this.alunoService.salvarAluno(this.aluno)
      .pipe(
        catchError(() => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao salvar aluno',
            detail: 'Erro inesperado ao salvar aluno'
          });
          return of(null);
        })
      )
      .subscribe((res) => {
        if (!res) return;

        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Aluno salvo com sucesso'
        });

        this.representantesSelecionados = [];
        form.reset();
      });
  }

  editarAluno() {
    this.alunoService.editarAluno(this.aluno, this.id).subscribe(() => {
       this.messageService.add({
            severity: 'success',
            summary: 'Editado com sucesso',
            detail: 'Editado com sucesso'
          });  
    });
  }

  buscarAlunoPorId() {
    this.alunoService.buscarAlunoPorId(this.id)
      .pipe(
        catchError((error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro ao buscar aluno',
            detail: 'Ocorreu um erro inesperado'
          });
          return of(null);
        })
      )
      .subscribe((response) => {
        if (!response) return;

        this.aluno = response;

        this.listarRepresentantes(() => {
        this.marcarRepresentantesDoAluno();
      });

        this.listarSeries();
      });
  }
}
