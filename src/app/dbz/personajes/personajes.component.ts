import { Component, OnInit,Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {
  // @Input() personajes:Personaje[]=[];
  // @Input('data') personajes:Personaje=[];
//esto es para pode hablar a componentes hijos a padres 

get personajes(){
  return this.dbzService.personajes;
}
constructor (private dbzService:dbzService){
 this.dbzService;
}




}
