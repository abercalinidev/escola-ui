import { Component } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: '/' },
    { label: 'Representantes', icon: 'pi pi-users', route: '/representante-pesquisa' },
    { label: 'Alunos', icon: 'pi pi-users', route: '/aluno-pesquisa' },
    { label: 'Relatórios', icon: 'pi pi-chart-line', route: '/relatorios' },
  ];
}
