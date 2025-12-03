import { Component, OnInit } from '@angular/core';
import { InformacaogeralService } from '../informacaogeral.service';
import { InformacaoGeral } from '../informacaoGeral';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  standalone : false,
  selector: 'app-informacaogeral-pesquisa',
  templateUrl: './informacaogeral-pesquisa.component.html',
  styleUrl: './informacaogeral-pesquisa.component.scss'
})
export class InformacaogeralPesquisaComponent implements OnInit {

  informacoes : InformacaoGeral[] = [];
  infoSelecionada! : InformacaoGeral;
  registrosHojeCount : any;
  ultimaData : any; 

  constructor(private informacaoGeralService : InformacaogeralService,
              private router : Router,
              private messageService : MessageService,
              private confirmationService: ConfirmationService

  ) {}

  ngOnInit(): void {
    this.listarInformacaoGeral();    
  }

  listarInformacaoGeral() {
    this.informacaoGeralService.listarSituacoesGerais().subscribe(response => {
      this.informacoes = response;
      this.calcularResumo();
    });
  }

  calcularResumo() {
    const hoje = new Date().toLocaleDateString('pt-BR');

    this.registrosHojeCount = this.informacoes.filter(
      x => x.dataCadastro === hoje
    ).length;

    const datas = this.informacoes.map(x => x.dataCadastro);
    this.ultimaData = datas.sort().reverse()[0] || '-';
  }

  prepararEditarInformacaoGeral() {
    this.router.navigate([`/informacaogeral-cadastro/${this.infoSelecionada.id}`]);
  }

 prepararRemoverInformacaoGeral() {
  this.confirmationService.confirm({
    message: 'Tem certeza que deseja excluir esta informação?',
    header: 'Confirmar Exclusão',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Sim',
    rejectLabel: 'Não',
    acceptButtonStyleClass: 'p-button-danger',
    rejectButtonStyleClass: 'p-button-text',
    accept: () => {
      this.excluirInformacaoGeral(this.infoSelecionada.id);
    }
  });
}

excluirInformacaoGeral(id: any) {
  this.informacaoGeralService.excluirInformacaoGeral(id).subscribe(() => {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Informação excluída com sucesso!'
    });
    this.listarInformacaoGeral();
  });
}


}
