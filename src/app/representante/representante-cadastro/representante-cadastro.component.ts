import { Component, OnInit } from '@angular/core';
import { Representante } from '../representante';
import { RepresentanteService } from '../representante.service';
import { catchError, of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone : false,
  selector: 'app-representante-cadastro',
  templateUrl: './representante-cadastro.component.html',
  styleUrl: './representante-cadastro.component.scss'
})
export class RepresentanteCadastroComponent implements OnInit {

  representante : Representante;
  id : any;

  constructor(private represetanteService : RepresentanteService,
              private messageService : MessageService,
              private activatedRoute : ActivatedRoute
  ) {
    this.representante = new Representante();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id) {
      this.buscarRepresentantePorId();
    }
  }

onSubmit(form: any) {
  if(this.id) {
    this.editarRepresentante();
  } else {
    this.salvarRepresentante(form);
  }
}


  buscarEndereco() {
    this.represetanteService.buscarCep(this.representante.endereco.cep).pipe(catchError(error => {
      this.messageService.add({ severity: 'error', summary: 'Cep invalido', detail: 'Cep invalido' });
      this.representante.endereco.bairro = '';
      this.representante.endereco.cidade = '';
      this.representante.endereco.estado = '';
      this.representante.endereco.rua = '';
      return of(null);
    })).subscribe(response => {
      this.representante.endereco.bairro = response.bairro;
      this.representante.endereco.cidade = response.localidade;
      this.representante.endereco.estado = response.uf;
      this.representante.endereco.rua = response.logradouro;
    });
  }

  buscarRepresentantePorId() {
    this.represetanteService.buscarRepresentantePorId(this.id).pipe(catchError(error => {
      this.messageService.add({ severity: 'error', summary: 'Erro inesperado', detail: 'Erro inesperado' });
      return of(null);
    })).subscribe(response => {
      this.representante = response;
    });
  }

  salvarRepresentante(form : any) {
     this.represetanteService.salvarRepresentante(this.representante)
    .pipe(
      catchError(error => {
        console.error(error);
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Ocorreu um erro inesperado', 
          detail: 'Não foi possível salvar o representante.' 
        });
        return of(null);
      })
    )
    .subscribe(response => {
      if (!response) return;

      this.messageService.add({ 
        severity: 'success', 
        summary: 'Salvo com sucesso', 
        detail: 'O representante foi salvo corretamente.' 
      });
      form.reset();
    });
  }
  
  editarRepresentante() {
    this.represetanteService.editarRepresentante(this.representante, this.id).pipe(catchError(error => {
      this.messageService.add({ severity: 'error', summary: 'Erro inesperado', detail: 'Erro inesperado' });
      return of(null);
    })).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Alterado com sucesso', detail: 'Alterado com sucesso' });
    });
  }

}
