import { Component } from "@angular/core";


@Component({
    selector:'app-horoe',
    templateUrl:'heroe.component.html',
})
export class HeroeComponent{
    nombre:string='iron-man';
    edad:number=45;
    

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenernombre():string{//el : string significa que regresa un string
        return `${this.nombre} - ${this.edad}`;//concatena valores

    }

    cambiarNombre():void{
        this.nombre='spiderman';

    }

    cambiarEdad():void{
        this.edad=30;
    }
}