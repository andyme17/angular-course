import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //indica que personajes será una variable de entrada que viene del elemento padre
  //@Input() personajes : Personaje[] = [];

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  //se inyecta el servicio en este componente
  constructor(private dbzService: DbzService){

  }
}
