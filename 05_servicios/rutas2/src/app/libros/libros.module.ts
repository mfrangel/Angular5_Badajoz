import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from './libros.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LibrosComponent],
  exports: [LibrosComponent]
})
export class LibrosModule { }
