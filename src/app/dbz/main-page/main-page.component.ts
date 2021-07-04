import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 456450,
  };

  //Función que recibe el elemento nuevo que envia el componente hijo
  agregarNuevoPersonaje(argumento: Personaje){
    //el nuevo elemento se ingresa al final del arreglo personajes que esta declarado en este archivo
    this.personajes.push(argumento);
  }

  /**
   * Se inyecta en el constructor, el servicio creado para el módulo
   */
  constructor( private dbzServices: DbzService){
    //Al arreglo personajes se le asignan los personajes que vienen del servicio importado
    this.personajes = this.dbzServices.personajes;
  }
}
