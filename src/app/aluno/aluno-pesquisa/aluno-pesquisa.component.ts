import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Aluno } from '../aluno';
import { MessageService } from 'primeng/api';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  standalone : false,
  selector: 'app-aluno-pesquisa',
  templateUrl: './aluno-pesquisa.component.html',
  styleUrl: './aluno-pesquisa.component.scss'
})
export class AlunoPesquisaComponent implements OnInit {

  alunos : Aluno[] = [];
  alunoSelecionado! : Aluno;
  ativosCount : any;
  cadastradosHojeCount : any;

  constructor(private alunoService : AlunoService,
              private messageService : MessageService,
              private router : Router
  ) {

  }

  ngOnInit(): void {
    this.listarAlunos();
  }

  listarAlunos() {
      this.alunoService.listarAlunos()
        .pipe(
          catchError(error => {
            this.messageService.add({
              severity: 'error',
              summary: 'Erro inesperado',
              detail: 'Ocorreu um erro ao carregar os representantes.'
            });
  
            return of([] as Aluno[]);
          })
        )
        .subscribe((response: Aluno[]) => {
  
          this.alunos = response;
  
          if (this.alunos.length === 0) {
            this.ativosCount = 0;
            this.cadastradosHojeCount = 0;
            return;
          }
  
          // Contagem de ativos
          this.ativosCount = this.alunos.filter(a => a.situacao === "ATIVO").length;
  
          // Contagem de cadastros do dia
          const hoje = new Date().toLocaleDateString('pt-BR');
  
          this.cadastradosHojeCount = this.alunos.filter(r => r.dataCadastro === hoje).length;
        });
    }

  toggleSituacao(aluno : any) {

  }

  prepararEdicaoAluno() {
    if (this.alunoSelecionado) {
      this.router.navigate([`/aluno-cadastro/${this.alunoSelecionado.id}`]);
    }
  }

}
