import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargandoService {
  private cargando = new BehaviorSubject(true);
  
  currentCargando = this.cargando.asObservable();
  constructor() { }

  changeCargando(cargando:boolean){
  	this.cargando.next(cargando);
  }
}
