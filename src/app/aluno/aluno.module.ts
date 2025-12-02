import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';

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
import { DatePickerModule } from 'primeng/datepicker';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AlunoPesquisaComponent } from './aluno-pesquisa/aluno-pesquisa.component';



@NgModule({
  declarations: [AlunoCadastroComponent, AlunoPesquisaComponent],
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
    DatePickerModule,
    AutoCompleteModule
  ],
  exports : [AlunoCadastroComponent, AlunoPesquisaComponent]
})
export class AlunoModule { }
