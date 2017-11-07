import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Podemos usar template o templateUrl
  templateUrl: './app.component.html',
  // template: `
  // <div class="container">
  // <app-header></app-header>
  // <app-pie></app-pie>
  // </div>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
