import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  //Recibimos del elemento padre, el nuevo personaje configurado por defecto
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //Creamos una propiedad que emitirá el nombre del personaje que se mande en el formulario al elemento padre
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  //cuando se le da submit al formulario, se ejecuta la siguiente función
  agregar(){
    if(this.nuevo.nombre.trim().length === 0){//valida si el campo esta vacio
      return;//no manda nada
    }

    //si el formulario si recibe datos, entonces ...
    this.onNuevoPersonaje.emit(this.nuevo);//en la propiedad se emite el nuevo personaje al componente padre

    //ya que se envía el personaje nuevo, se resetea en el formulario
    this.nuevo = {
      nombre: '',
      poder: 0
    };
  }
}
