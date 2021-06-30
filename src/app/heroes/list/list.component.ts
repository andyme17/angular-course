import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Visión'];
  heroeBorrado: string = '';

  constructor() {
    console.log('se ejecuta el constructor');
  }

  ngOnInit(): void {
    console.log('se ejecuta el ngOnInit');
  }

  /**
   * Para eliminar un heroe y poder llamarlo en el template, creamos una variable heroeBorrado(línea 9),
   * en el metodo deleteHeroe, asignamos a esa variable (this.heroeBorrado, es this porque se
   * esta refiriendo a la propiedad creada en la clase) el heroe que vamos eliminando (this.heroes,
   * que heroes es un arreglo) se coloca || porque el método pop() por definición, puede regresar
   * un string o un undefined
   */
  deleteHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
