import { Component, OnInit, Input } from '@angular/core';

import {PodcasterService} from '../services/podcaster.service';
import {CargandoService} from '../services/cargando.service';
import {Podcast} from '../shared/podcast';
@Component({
  selector: 'app-podcasts-list',
  templateUrl: './podcasts-list.component.html',
  styleUrls: ['./podcasts-list.component.css']
})
export class PodcastsListComponent implements OnInit {
  podcastList: Podcast[];
  @Input() filtro:any;
  constructor(private podcasterService: PodcasterService,
  			  private cargandoService: CargandoService) {}
  
  ngOnInit() {
  	this.cargandoService.changeCargando(true);
  	let listadoGuardado = this.podcasterService.getPodcastListLocal();
  	if(listadoGuardado!=null){
  		this.podcastList = listadoGuardado;
  		this.cargandoService.changeCargando(false);
  	}else{
  		this.podcasterService.getPodcastList().subscribe(data=>{
  			this.podcastList=data;
  			this.podcasterService.setPodcastListadoLocal(this.podcastList);
  			this.cargandoService.changeCargando(false);
  		});
  	}
  }

}
