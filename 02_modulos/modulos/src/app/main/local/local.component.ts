import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class LocalComponent implements OnInit {

  @ViewChild('nombre') eNombre: any;
  sNombre: string;

  constructor() { }

  ngOnInit() {
    console.log(this.eNombre);
  }

}
