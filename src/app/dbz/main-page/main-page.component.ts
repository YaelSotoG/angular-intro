import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent  {
  
  personajes:Personaje[]=[
    {
      nombre:"goku",
      poder:15000
    },
    {
      nombre:'vegeta',
      poder:14500
    }
  ];


 
  cambiarNombre(event:any){//el event necesita un tipo obligatorio
    console.log(event.target.value);

  }

  nuevo:Personaje={
    nombre:'Trunks',
    poder:1200
  }
  
  
  agregarNuevoPersonaje(argumento:Personaje){
    // console.log('call main page')  
    debugger;
    //esta funcion hace que se pause el navegador al llegar a esta linea de codigo    
    this.personajes.push(argumento)
  }


  // // agregar(event:any){
  // //   // event.preventDefault();//esto evita que la pagina se recargue
  //   console.log(event)

  // }

}
