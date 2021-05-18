import { Component, OnInit } from '@angular/core';
import { pessoa } from 'src/app/modelo/pessoa';

@Component({
  selector: 'app-pg1',
  templateUrl: './pg1.component.html',
  styleUrls: ['./pg1.component.css']
})
export class Pg1Component implements OnInit {

  constructor() { }

  // objeto
  pessoa = {
    nome  : '',
    cidade : ''
  }

  // json
  dados: pessoa[] = [];

  // evento de cadastro
  cadastrar = () => {
    this.dados.push(this.pessoa);

    this.pessoa = new pessoa();
  }

  ngOnInit(): void {
  }

}
