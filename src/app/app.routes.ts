import { Routes } from '@angular/router';

import { RepresentanteCadastroComponent } from './representante/representante-cadastro/representante-cadastro.component';
import { RepresentantePesquisaComponent } from './representante/representante-pesquisa/representante-pesquisa.component';
import { AlunoCadastroComponent } from './aluno/aluno-cadastro/aluno-cadastro.component';
import { AlunoPesquisaComponent } from './aluno/aluno-pesquisa/aluno-pesquisa.component';
import { InformacaogeralCadastroComponent } from './informacaogereal/informacaogeral-cadastro/informacaogeral-cadastro.component';
import { InformacaogeralPesquisaComponent } from './informacaogereal/informacaogeral-pesquisa/informacaogeral-pesquisa.component';

export const routes: Routes = [
    {path : 'representante-cadastro', component : RepresentanteCadastroComponent},
    {path : 'representante-pesquisa', component : RepresentantePesquisaComponent},
    {path : 'representante-cadastro/:id', component : RepresentanteCadastroComponent},

    {path : 'aluno-cadastro', component : AlunoCadastroComponent},
    {path : 'aluno-pesquisa', component : AlunoPesquisaComponent},
    {path : 'aluno-cadastro/:id', component : AlunoCadastroComponent},

    {path : 'informacaogeral-cadastro', component : InformacaogeralCadastroComponent},
    {path : 'informacaogeral-pesquisa', component : InformacaogeralPesquisaComponent},
    {path : 'informacaogeral-cadastro/:id', component : InformacaogeralCadastroComponent},

];
