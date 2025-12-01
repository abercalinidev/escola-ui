import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { Toolbar } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon'
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


import { RepresentanteCadastroComponent } from './representante-cadastro/representante-cadastro.component';
import { RepresentantePesquisaComponent } from './representante-pesquisa/representante-pesquisa.component';
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [RepresentanteCadastroComponent, RepresentantePesquisaComponent],
  imports: [
    CommonModule,
    Card,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    DividerModule,
    ButtonModule,
    InputMaskModule,
    ToastModule,
    Toolbar,
    TableModule,
    IconField,
    InputIcon,
    ConfirmDialogModule,
    RouterLink,
    RouterModule,
    TooltipModule
],
  exports : [RepresentanteCadastroComponent, RepresentantePesquisaComponent]
})
export class RepresentanteModule { }
