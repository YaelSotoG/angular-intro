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

  nuevo={
    nombre:'',
    poder:0
  }
  agregar(){
    console.log(this.nuevo)
    if (this.nuevo.nombre.trim().length==0){//si la variable nombre quitandole los espacios (trim) es igual a 0
      return;
    }

      this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

  cambiarNombre(event:any){//el event necesita un tipo obligatorio
    console.log(event.target.value);

  }

  // // agregar(event:any){
  // //   // event.preventDefault();//esto evita que la pagina se recargue
  //   console.log(event)

  // }

}
