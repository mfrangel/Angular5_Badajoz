import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public sTitulo: string;

  constructor() { }

  ngOnInit() {
    this.sTitulo = 'Uso de módulos';
  }

}
