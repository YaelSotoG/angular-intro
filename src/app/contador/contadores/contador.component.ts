import { Component } from "@angular/core";//se le agrega el decorador para transformar la clase en un componente de angular

@Component({
    selector: 'app-contador',//ocuparemos el selector y el template
    //este app-contador se llamara en el app.component.html
    template:`
        <h1>{{title}}</h1>
        <h3>la base es:<strong> {{base}} </strong></h3>
        <button (click)="acumular(base);">+{{base}}</button>
        <button (click)="acumular(base*-1)">-{{base}}</button>
        <span > {{numero}} </span>
    `,
})
export class ContadorComponent {//la clase contadorcomponent se agrega al app.module.ts
    title:string = 'Contador App';
    numero:number=10;
    base:number=5;
    acumular(valor:number){
      this.numero+=valor;
    }

}