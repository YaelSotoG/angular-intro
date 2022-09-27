import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent /*implements OnInit*/ {

  heroeborrado:string='';
  heroes:string[]=['spiderman','ironman','hulk','thor'];
  borrarHeroe(){
    console.log('borrando');
    // this.heroes.pop();
   
   this.heroeborrado=this.heroes.shift()|| '';
  }

  // constructor() { 
  //   console.log('constructor');
  // }

  // ngOnInit(): void {//para inicializar valores
  //   console.log('oninit');
  // }

}
