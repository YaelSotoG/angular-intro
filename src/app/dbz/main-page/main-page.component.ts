import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent  {

  // personajes:Personaje[]=[];
 
  // cambiarNombre(event:any){//el event necesita un tipo obligatorio
  //   console.log(event.target.value);

  // }

  nuevo:Personaje={
    nombre:'Trunks',
    poder:1200
  }
  
  // get personajes():Personaje[]{
  //   return this.dbzService.personajes
  // }
  
  constructor(){
    // this.personajes=this.dbzService.personajes;
    // console.log('inicializado')
  }//esto se le conoce como inyector de dependencias 
  

  // // agregar(event:any){
  // //   // event.preventDefault();//esto evita que la pagina se recargue
  //   console.log(event)

  // }

}
