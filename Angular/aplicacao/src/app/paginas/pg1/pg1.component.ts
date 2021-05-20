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
  pessoa = new pessoa();

  // json
  dados: pessoa[] = [];

  // evento de cadastro
  cadastrar = () => {
    this.dados.push(this.pessoa);

    this.pessoa = new pessoa();

    this.addLocalStorage();
  }

  // evento para remover
  remover = (codigo: number) => {
    this.dados.splice(codigo, 1)
  }

  // adicionar ao local storage
  addLocalStorage = () => {
    localStorage.setItem('dados', JSON.stringify(this.dados))
  }

  // verificar o localstorage
  verificarLocalStorage = () => {
    if(localStorage.getItem('dados') != null){
      console.log(localStorage.getItem('dados') || '{}');
    }
  }

  ngOnInit(): void {
    this.verificarLocalStorage();
  }

}
