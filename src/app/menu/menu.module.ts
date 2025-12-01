import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule
  ],
  exports : [MenuComponent]
})
export class MenuModule { }
