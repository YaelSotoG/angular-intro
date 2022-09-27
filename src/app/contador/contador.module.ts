import { NgModule } from "@angular/core";


import { ContadorComponent } from './contadores/contador.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations:[
        ContadorComponent//declaramos que clases ocupamos
    ],
    exports:[
        ContadorComponent//que clases vamos a utilizar fuera
    ],
    imports:[
       CommonModule//este siempre lo debemos importar

    ]
})
export class ContadorModule{

}