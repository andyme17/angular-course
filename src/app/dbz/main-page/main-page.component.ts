import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  //se declara el personaje que se quiere mantener por defautl
  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 456450,
  };

  /**
   * Se inyecta en el constructor, el servicio creado para el módulo
   */
  constructor(){ }
}
