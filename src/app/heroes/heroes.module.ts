//2. Importamos el decorador de angular, para que la clase creada sea aceptada como un modulo
import { NgModule } from "@angular/core";
//7. Importamos el modulo indicado en los imports(línea 23)
import { CommonModule } from "@angular/common";

//5. Como se declaran los componentes, se importan
import { ListComponent } from './list/list.component';
import { HeroeComponent } from './heroe/heroe.component';


//3. Decorador que indica que se trata de un componente
@NgModule({
  //4. declaramos los componentes que pertenecerán al modulo
  declarations: [
    HeroeComponent,
    ListComponent
  ],
  //6. se declaran los componentes que estarán disponibles fuera de este módulo
  exports:[
    ListComponent
  ],
  //7. Solo se indican módulos
  imports: [
    CommonModule//ayuda con las directivas personalizadas de angula, como ngIf, ngFor,etc
  ]
})

////1. Se crea la clase y se coloca export para que este disponible en toda la app
export class HeroesModule{

}
