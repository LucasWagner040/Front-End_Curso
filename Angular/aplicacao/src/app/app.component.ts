import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Lucas';
  exibir = true
  textBotao = 'Ocultar parágrafo'

  clique = () => {
    alert("Hellou Word")
  }

  cursos = [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'React',
    'Angular'
  ];

  alterar = () => {
    this.exibir = !this.exibir

    this.textBotao = this.exibir === true ? 'Ocultar parágrafo' : 'Exibir parágrafo'
  }

}
