import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 456450,
  };

  //Función que recibe el elemento nuevo que envia el componente hijo
  agregarNuevoPersonaje(argumento: Personaje){
    //el nuevo elemento se ingresa al final del arreglo personajes que esta declarado en este archivo
    this.personajes.push(argumento);
  }
}
