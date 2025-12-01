import { Routes } from '@angular/router';

import { RepresentanteCadastroComponent } from './representante/representante-cadastro/representante-cadastro.component';
import { RepresentantePesquisaComponent } from './representante/representante-pesquisa/representante-pesquisa.component';

export const routes: Routes = [
    {path : 'representante-cadastro', component : RepresentanteCadastroComponent},
    {path : 'representante-pesquisa', component : RepresentantePesquisaComponent},
    {path : 'representante-cadastro/:id', component : RepresentanteCadastroComponent}
];
