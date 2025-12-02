import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RepresentanteModule } from './representante/representante.module';
import { MenuModule } from './menu/menu.module';
import { AlunoModule } from './aluno/aluno.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RepresentanteModule, MenuModule, AlunoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'escola-ui';
}
