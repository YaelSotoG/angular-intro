import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
 
})
export class AgregarComponent {
  // @Input() personajes:Personaje[]=[];
  @Input() nuevo={
              nombre:'',
              poder:0
            }
  
  // @Output() onNuevoPersonaje:EventEmitter<Personaje>=new EventEmitter();//crea un nuevo evento
  constructor (private dbzService:dbzService){

  }

  agregar(){
    if (this.nuevo.nombre.trim().length==0){//si la variable nombre quitandole los espacios (trim) es igual a 0
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    //emite un valor que sea del mismo tipo
    // this.personajes.push(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    };
  }





}
