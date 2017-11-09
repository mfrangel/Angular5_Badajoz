import { ListaSrvhttpComponent } from './lista-srvhttp/lista.srvhttp.component';
import { HttpModule } from '@angular/http';
import { ListaGoogleComponent } from './lista-google/lista.google.component';
import { ListaAsyncComponent } from './lista-async/lista.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ListaComponent, ListaAsyncComponent,
    ListaGoogleComponent, ListaSrvhttpComponent
    ],
  exports : [
    ListaComponent, ListaAsyncComponent,
    ListaGoogleComponent, ListaSrvhttpComponent],
})
export class MainModule { }
