// 3. Importamos el decorador de Injectable
import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()//2. Indicamos que la clase DbzService se va a poder inyectar
// 1. Exportamos la clase Dbz Service
export class DbzService{
  /**
   *El servicio contendrá la información de los personajes,
   *solo se manejará la información, aquí
   */
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

  constructor(){
    console.log('Servicio inicializado');
  }
}
