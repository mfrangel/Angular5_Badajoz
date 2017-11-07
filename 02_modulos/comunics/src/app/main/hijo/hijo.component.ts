import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() miNombre: string;
  @Output() recibido: EventEmitter<any>;
  sNombreFav: string;

  constructor() {
    // Se inicializa aquí en lugar de en el onInit
    this.recibido = new EventEmitter();
  }

  ngOnInit() {
  }

  btnEvento() {
    this.recibido.emit(this.sNombreFav);
    console.log('Evento emitido');
  }

}
