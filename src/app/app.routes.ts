import { Routes } from '@angular/router';

import { RepresentanteCadastroComponent } from './representante/representante-cadastro/representante-cadastro.component';
import { RepresentantePesquisaComponent } from './representante/representante-pesquisa/representante-pesquisa.component';
import { AlunoCadastroComponent } from './aluno/aluno-cadastro/aluno-cadastro.component';
import { AlunoPesquisaComponent } from './aluno/aluno-pesquisa/aluno-pesquisa.component';

export const routes: Routes = [
    {path : 'representante-cadastro', component : RepresentanteCadastroComponent},
    {path : 'representante-pesquisa', component : RepresentantePesquisaComponent},
    {path : 'representante-cadastro/:id', component : RepresentanteCadastroComponent},

    {path : 'aluno-cadastro', component : AlunoCadastroComponent},
    {path : 'aluno-pesquisa', component : AlunoPesquisaComponent},
    {path : 'aluno-cadastro/:id', component : AlunoCadastroComponent},
];
