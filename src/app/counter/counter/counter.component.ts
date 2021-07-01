//2. Importamos el decorador de angular, para que la clase creada sea aceptada como un componente
import { Component } from '@angular/core';

@Component({
  //3. el decorador indica que se trata de un componente
  selector: 'app-counter', //4. nombre de la etiqueta con que se identificará el componente
  //5. ocupamos template para incrustar el html en este archivo y no en uno externo
  template: `
    <h1>{{ title }}</h1>
    <h3>
      La base es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+{{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">-{{ base }}</button>
  `,
})

//1. Se coloca export para que este disponible en toda la app
export class CounterComponent {
  //6. Colocamos las propiedades de la clase que se pasan al template
  title: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  //7. Colocamos el metodo que se encarga de ejecutar el contador
  acumular(valor: number) {
    //this hace referencia a la propiedad número de la clase
    this.numero += valor;
    console.log(this.numero, valor);
  }
}
