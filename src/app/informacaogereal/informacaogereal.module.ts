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
import { RouterLink } from "@angular/router";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DatePickerModule } from 'primeng/datepicker';


import { InformacaogeralCadastroComponent } from './informacaogeral-cadastro/informacaogeral-cadastro.component';
import { InformacaogeralPesquisaComponent } from './informacaogeral-pesquisa/informacaogeral-pesquisa.component';

@NgModule({
  declarations: [InformacaogeralCadastroComponent, InformacaogeralPesquisaComponent],
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
    RouterModule,
    TooltipModule,
    RouterLink,
    AutoCompleteModule,
    DatePickerModule
  ],
  exports : [InformacaogeralCadastroComponent, InformacaogeralPesquisaComponent]
})
export class InformacaogerealModule { }
