import { Component, OnInit } from '@angular/core';
import {CargandoService} from '../services/cargando.service';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css']
})
export class CargandoComponent implements OnInit {
  cargando: Boolean;

  constructor(private cargandoService:CargandoService) { }

  ngOnInit() {
  	this.cargandoService.currentCargando.subscribe(cargando =>this.cargando = cargando);
  }

}
