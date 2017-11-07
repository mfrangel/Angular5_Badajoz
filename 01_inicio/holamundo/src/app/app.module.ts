import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // exports : []
  // Al ser el módulo principal, en lugar de exports se utiliza bootstrap
  bootstrap: [AppComponent]
})
export class AppModule { }
