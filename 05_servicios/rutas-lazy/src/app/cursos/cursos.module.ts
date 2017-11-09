import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CursosComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CursosComponent],
  exports: [CursosComponent]
})
export class CursosModule { }
