import { Component, OnInit } from '@angular/core';
import { Representante } from '../representante';
import { RepresentanteService } from '../representante.service';
import { catchError, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-representante-pesquisa',
  templateUrl: './representante-pesquisa.component.html',
  styleUrl: './representante-pesquisa.component.scss'
})
export class RepresentantePesquisaComponent implements OnInit {

  representanteSelecionado!: Representante;

  representantes: Representante[] = [];

  ativosCount = 0;
  cadastradosHojeCount = 0;

  constructor(
    private representanteService: RepresentanteService,
    private messageService: MessageService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.listarRepresentantes();
  }

  listarRepresentantes() {
    this.representanteService.listarRepresentantes()
      .pipe(
        catchError(error => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro inesperado',
            detail: 'Ocorreu um erro ao carregar os representantes.'
          });

          return of([] as Representante[]);
        })
      )
      .subscribe((response: Representante[]) => {

        this.representantes = response;

        if (this.representantes.length === 0) {
          this.ativosCount = 0;
          this.cadastradosHojeCount = 0;
          return;
        }

        // Contagem de ativos
        this.ativosCount = this.representantes.filter(r => r.situacao === 'ATIVO').length;

        // Contagem de cadastros do dia
        const hoje = new Date().toLocaleDateString('pt-BR');

        this.cadastradosHojeCount = this.representantes.filter(r => r.dataCadastro === hoje).length;
      });
  }

 toggleSituacao(representante : any) {
  const novoStatus = representante.situacao === 'ATIVO' ? 'INATIVO' : 'ATIVO';
  if(representante.situacao === 'ATIVO') {
    this.inativarRepresentante(representante.id);
  } else {
    this.ativarRepresentante(representante.id);
  }
 }

  prepararEdicaoRepresentante() {
    if (this.representanteSelecionado) {
      this.router.navigate([`/representante-cadastro/${this.representanteSelecionado.id}`]);
    }
  }

  inativarRepresentante(representanteId : any) {
    this.representanteService.inativarRepresentante(representanteId).pipe(catchError(error => {
      this.messageService.add({ severity: 'error', summary: 'Erro inesperado', detail: 'Erro inesperado' });
      return of(null);
    })).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Inativo com sucesso', detail: 'Inativo com sucesso' });
      this.listarRepresentantes();
    })
  }

   ativarRepresentante(representanteId : any) {
    this.representanteService.ativarRepresentante(representanteId).pipe(catchError(error => {
      this.messageService.add({ severity: 'error', summary: 'Erro inesperado', detail: 'Erro inesperado' });
      return of(null);
    })).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Ativo com sucesso', detail: 'Ativo com sucesso' });
      this.listarRepresentantes();
    })
  }
}
