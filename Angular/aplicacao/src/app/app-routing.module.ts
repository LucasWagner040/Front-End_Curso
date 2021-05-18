import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './paginas/nao-encontrado/nao-encontrado.component';
import { Pg1Component } from './paginas/pg1/pg1.component';
import { Pg2Component } from './paginas/pg2/pg2.component';
import { Pg3Component } from './paginas/pg3/pg3.component';

const routes: Routes = [
  {path : 'pagina1', component : Pg1Component},
  {path : 'pagina2', component : Pg2Component},
  {path : 'pagina3', component : Pg3Component},
  {path : '', redirectTo : '/pagina1', pathMatch : 'full'},
  {path : '**', component : NaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
