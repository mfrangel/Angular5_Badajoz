import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { Lista4Component } from './lista4/lista4.component';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListaComponent,
    Lista4Component,
    PipesComponent],
  exports: [ListaComponent,
    Lista4Component,
    PipesComponent]
})
export class MainModule { }
