import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()//lo que diferencia una clase de un servicio es el injectable
export class dbzService{

      
  private _personajes:Personaje[]=[//_el guion bajo la hace privada
    {
      nombre:"goku",
      poder:15000
    },
    {
      nombre:'vegeta',
      poder:14500
    }
  ];

  get personajes():Personaje[]{
    return [...this._personajes];//las llaves indican que es un arreglo, los ... es un spread(separa todos los datos del arreglo y crea uno nuevo )
    //esta es una buena practica de js
  }

  
    constructor(){
        console.log('servicio creado ')
    }
//el servicio es donde tenemos centralizada la informacion `
//los servicios pueden usar otros servicios 
//los metodos van abajo del constructor 
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);

    }
}