import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PodcasterService} from '../services/podcaster.service';
import {DataServiceService} from '../services/data-service.service';
import {CargandoService} from '../services/cargando.service';
//import { NgxXml2jsonService } from 'ngx-xml2json';
import {Podcast} from '../shared/podcast';
import {PodcastDetalle} from '../shared/podcastDetalle';
import {PodcastEpisode} from '../shared/podcastEpisode';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-detalle-podcast',
  templateUrl: './detalle-podcast.component.html',
  styleUrls: ['./detalle-podcast.component.css']
})
export class DetallePodcastComponent implements OnInit {
  podcastDetalle: PodcastDetalle;
  constructor(private podcasterService: PodcasterService,
  			  private route: ActivatedRoute,
  	          private location: Location,
  	          private dataService: DataServiceService,
  	          private cargandoService: CargandoService){}

  ngOnInit() {
  	this.cargandoService.changeCargando(true);
  	let id =this.route.snapshot.params['podcastId'];
  	let detallePodcastLocal = this.podcasterService.getDetallePodcastLocal(id);
  	if(detallePodcastLocal != null){
  		this.podcastDetalle = detallePodcastLocal;
  		this.dataService.changePodcast(this.podcastDetalle);
  		this.cargandoService.changeCargando(false);
  	}else{
  		let urlPodcast:string;
  		this.podcasterService.getDetallePodcast(id).subscribe(data=>{
  			let podcastsEpisodes :PodcastEpisode[]= new Array();
  		 	let idPodcast =data.results['0'].collectionId;
  		 	let imagePodcast = data.results['0'].artworkUrl100;
  		 	let titlePodcast = data.results['0'].collectionName;
  		 	let artistPodcast = data.results['0'].artistName;
  		 	let descriptionPodcast:string;
  		 	urlPodcast=data.results['0'].feedUrl;
  		 	this.podcasterService. getDetalleCompletoPodcast(urlPodcast).subscribe(data=>{
    			//get episodes
    			descriptionPodcast=data.feed.description;
    			let count=1;
    			data.items.map(data=>{
    				let episode = new 
    				PodcastEpisode(count++,data.title,
    					data.pubDate,data.enclosure.duration,
    					data.description,data.enclosure.link, data.enclosure.type);
    				podcastsEpisodes.push(episode);
    			});
    			let podcastDetalle = new PodcastDetalle(idPodcast,imagePodcast,titlePodcast,artistPodcast
             	,descriptionPodcast,podcastsEpisodes);
    			this.podcastDetalle=podcastDetalle;
    			this.podcasterService.setDetallePodcastLocal(this.podcastDetalle);
    			this.dataService.changePodcast(this.podcastDetalle);
    			this.cargandoService.changeCargando(false);
  		 	});
  		});
  	}
  }

}
