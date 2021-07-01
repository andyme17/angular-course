//2. Importamos el decorador para que la clase creada sea reconocida como un módulo
import { NgModule } from '@angular/core';

//5. Importamos los componentes que pertenecerán al módulo
import { CounterComponent } from './counter/counter.component';

//3. Añadimos el decorador a la clase
@NgModule({
   //4. declaramos los componentes que pertenecerán al modulo
  declarations:[
    CounterComponent
  ],
  //6. se declaran los componentes que estarán disponibles fuera de este módulo
  exports:[
    CounterComponent
  ]
})
//1. Creamos la clase del modulo y la exportamos
export class CounterModule{

}
