import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],//se declaran las partes de este component
    exports:[//las cosas que quiero que sean visibles
        ListadoComponent
    ],
    imports:[//aqui solo se ponen otros modulos
        CommonModule,//
    ]
})
export class HeroesModulo{}