import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../aluno/aluno';
import { AlunoService } from '../../aluno/aluno.service';
import { InformacaoGeral } from '../informacaoGeral';
import { MessageService } from 'primeng/api';
import { InformacaogeralService } from '../informacaogeral.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-informacaogeral-cadastro',
  templateUrl: './informacaogeral-cadastro.component.html',
  styleUrls: ['./informacaogeral-cadastro.component.scss']
})
export class InformacaogeralCadastroComponent implements OnInit {

  id: any;

  informacaoGeral: InformacaoGeral = new InformacaoGeral();

  alunos: Aluno[] = [];
  alunosFiltrados: Aluno[] = [];
  alunoSelecionado!: Aluno | null;

  situacoesCafeManha : any[] = [];
  filteredSituacoesCafeManha : any[] = [];
  situacoesAlmoco : any[] = [];
  filteredSituacoesAlmoco : any[] = [];
  situacoesCafeTarde : any[] = [];
  filteredSituacoesCafeTarde : any[] = [];

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private informacaoGeralService: InformacaogeralService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.buscarInformacaoGeralId();
    } else {
      this.listarAlunos();
      this.listarSituacoesCafeManha();
      this.listarSituacoesAlmoco();
      this.listarSituacoesCafeTarde();
    }
  }

  listarAlunos() {
    this.alunoService.listarAlunos().subscribe(response => {
      this.alunos = response;
    });
  }

  filtrarAlunos(event: any) {
    const query = event.query.toLowerCase();
    this.alunosFiltrados = this.alunos.filter(a =>
      a.nome.toLowerCase().includes(query)
    );
  }

  listarSituacoesCafeManha() {
    this.situacoesCafeManha = [
      { label: "NÃO", value: "NAO" },
      { label: "MÉDIO", value: "MEDIO" },
      { label: "BOM", value: "BOM" }
    ];
  }  

  searchSituacoesCafeManha(event: any) {
    const query = event.query.toLowerCase();
    this.filteredSituacoesCafeManha = this.situacoesCafeManha.filter(s =>
      s.label.toLowerCase().includes(query)
    );
  }

   listarSituacoesAlmoco() {
    this.situacoesAlmoco = [
      { label: "NÃO", value: "NAO" },
      { label: "MÉDIO", value: "MEDIO" },
      { label: "BOM", value: "BOM" }
    ];
  }  

 searchSituacoesAlmoco(event: any) {
    const query = event.query.toLowerCase();
    this.filteredSituacoesAlmoco = this.situacoesAlmoco.filter(s =>
      s.label.toLowerCase().includes(query)
    );
  }

  listarSituacoesCafeTarde() {
    this.situacoesCafeTarde = [
      { label: "NÃO", value: "NAO" },
      { label: "MÉDIO", value: "MEDIO" },
      { label: "BOM", value: "BOM" }
    ];
  }  

  searchSituacoesCafeTarde(event: any) {
    const query = event.query.toLowerCase();
    this.filteredSituacoesCafeTarde = this.situacoesCafeTarde.filter(s =>
      s.label.toLowerCase().includes(query)
    );
  }

  onDataCadastroChange(event: Date) {
    if (event) {
      const dia = String(event.getDate()).padStart(2, '0');
      const mes = String(event.getMonth() + 1).padStart(2, '0');
      const ano = event.getFullYear();
      this.informacaoGeral.dataCadastro = `${dia}/${mes}/${ano}`;
    }
  }

onSubmit(form: any) {
  if (this.id) {
    this.editarInformacaoGeral();
  } else {
    this.salvarInformacaoGeral(form)
  }
}

salvarInformacaoGeral(form : any) {
  this.informacaoGeral.aluno.id = this.alunoSelecionado?.id;
  this.informacaoGeralService.salvarInformacaoGeral(this.informacaoGeral).subscribe(() => {
    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Informação salva com sucesso'});
    form.reset();
  });
}

buscarInformacaoGeralId() {
  this.informacaoGeralService.buscarInformacaoGeralId(this.id).subscribe(response => {
    this.informacaoGeral = response;

    this.alunoService.listarAlunos().subscribe(alunos => {
      this.alunos = alunos;

      this.alunoSelecionado = this.alunos.find(a => a.id === this.informacaoGeral.aluno.id) || null;
    });

    this.listarSituacoesCafeManha();
    this.listarSituacoesAlmoco();
    this.listarSituacoesCafeTarde();
  });
}

editarInformacaoGeral() {
  this.informacaoGeral.aluno.id = this.alunoSelecionado?.id;
  this.informacaoGeralService.editarInformacaoGeral(this.informacaoGeral, this.id).subscribe(() => {
    this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Informação editada com sucesso'});
  });
}

  voltar() {
    history.back();
  }
}
