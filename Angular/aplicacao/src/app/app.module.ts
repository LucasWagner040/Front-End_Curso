import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { Pg1Component } from './paginas/pg1/pg1.component';
import { Pg2Component } from './paginas/pg2/pg2.component';
import { Pg3Component } from './paginas/pg3/pg3.component';
import { NaoEncontradoComponent } from './paginas/nao-encontrado/nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    Pg1Component,
    Pg2Component,
    Pg3Component,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
