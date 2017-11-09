import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosComponent } from './libros.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LibrosComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LibrosComponent],
  exports: [LibrosComponent]
})
export class LibrosModule { }
