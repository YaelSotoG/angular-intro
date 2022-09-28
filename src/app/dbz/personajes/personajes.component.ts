import { Component, OnInit,Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  
})
export class PersonajesComponent {
  @Input() personajes:Personaje[]=[];
  // @Input('data') personajes:Personaje=[];
//esto es para pode hablar a componentes hijos a padres 
}
