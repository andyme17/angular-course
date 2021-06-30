import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
  nombre: string ='Ironman';
  edad: number = 45;

  //al crear un getter se tomará como una propiedad, no como un metodo
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  obtenerNombre():string{
    return `${ this.nombre} - ${ this.edad }`;//template string
  }

  cambiarNombre(): void{
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void{
    this.edad = 30;
  }
}
