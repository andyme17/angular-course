import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//nombre del componente
  templateUrl: './app.component.html',

  //también existe template que coloca contenido dentro de este mismo archivo
/*template: `<h1>Esta es una prueba</h1>
  <p>Siguiendo un curso de angular</p>`, */

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  acumular(valor:number){
    //this hace referencia a la propiedad número de la clase
    this.numero += valor;
    console.log(this.numero, valor);
  }
}
