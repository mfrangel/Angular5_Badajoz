import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, PieComponent, LogoComponent],
  exports: [HeaderComponent, PieComponent]
})
export class SharedModule { }
