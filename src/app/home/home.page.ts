import { DatosMockService } from './../datos-mock.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public estudios;
  constructor(private datosMockService:DatosMockService) {
    this.estudios=datosMockService.getEstudios();
  }
  cosas(){
    console.log("has pulsado");    
  }
}
