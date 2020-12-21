import { Injectable } from '@angular/core';
import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class DatosMockService implements Datos {

  constructor() { }
  //un stub porque depende del parametro da diferentes retornos
  getGrupos(estudio: string): string[] {
    throw new Error('Method not implemented.');
  }
  
  //Un fake porque siempre da los mismos datos
  getEstudios(): string[] {
    let estudios=['bac','div','eso'];
    return estudios;
  }
}
