import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [HeaderComponent, PieComponent, LogoComponent, MenuComponent],
  exports: [HeaderComponent, PieComponent,  LogoComponent, MenuComponent]
})
export class SharedModule { }
