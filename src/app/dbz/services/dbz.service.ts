// 3. Importamos el decorador de Injectable
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()//2. Indicamos que la clase DbzService se va a poder inyectar
// 1. Exportamos la clase Dbz Service
export class DbzService{
  /**
   *El servicio contendrá la información de los personajes,
   *solo se manejará la información, aquí, por eso se coloca private
   */
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]

  get personajes(): Personaje[]{
    /*retorna un arreglo de los personajes con el operador spread, clonamos el arreglo de
      personajes para que este disponible para los otros componentes*/
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(nuevoPersonaje: Personaje){
    this._personajes.push(nuevoPersonaje);
  }
}
