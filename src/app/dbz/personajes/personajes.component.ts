import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //indica que personajes será una variable de entrada que viene del elemento padre
  @Input() personajes : Personaje[] = [];
}
