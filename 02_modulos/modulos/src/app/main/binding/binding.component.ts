import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  sNombre: string;
  sNumber: number;
  isSpanish: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Manu';
    this.sNumber = 22;
    this.isSpanish = true;
  }

}
