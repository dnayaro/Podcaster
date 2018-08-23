import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError	} from 'rxjs';
import {podcastListURL, apikey} from '../shared/baseUrls';
import { map,catchError } from 'rxjs/operators';

import {Podcast} from '../shared/podcast';
import {PodcastEpisode} from '../shared/podcastEpisode';
import {PodcastDetalle} from '../shared/podcastDetalle';


@Injectable({
  providedIn: 'root'
})
export class PodcasterService {

  constructor(private http: HttpClient) { }
  
  private httpheadersGet = new HttpHeaders().set("Access-Control-Allow-Origin", "http://localhost:4200");
  
  //se obtiene la lista de Podcast
  getPodcastList(): Observable<Podcast[]>{
  	let podcastList: Podcast[] = new Array; 
  	let resp=this.http.get<Podcast[]>(podcastListURL).pipe(
  				map(
  					item => { 
  						item['feed']['entry'].map(
  							data=>{ 
              					let  pod= new Podcast(data['id']['attributes']['im:id'],
              						data['im:image']['0']['label'],
              						data['title']['label'],
              						data['im:artist']['label']);
             					podcastList.push(pod);
					});
  			 		return podcastList;
  				}))
  			.pipe(
      				catchError(this.handleError)
    		);
  					
  	return resp;  
  }
  // obtenemos url donde sacar detalles del podcast
  getDetallePodcast(id:string):Observable<any>{
  	let resp=this.http.get('https://itunes.apple.com/lookup?id='+id, {"headers": this.httpheadersGet})
  	.pipe(
      catchError(this.handleError)
    );
  		return resp;
  }
  //obtenemos todos los detalles del podcast y sus episodios
  getDetalleCompletoPodcast(url:string):Observable<any>{
  	return this.http.get('https://api.rss2json.com/v1/api.json?rss_url='+url+'&api_key='+apikey+'&count=1000')
  	.pipe(
      catchError(this.handleError)
    );

  }

  //se obtiene lista Podcast de almacenamiento en cliente
  getPodcastListLocal():Podcast[]{
  	const listaPodcastsGuardada = localStorage.getItem('listadoPodcast');
  	const fechaLimitePodcasts = localStorage.getItem('fechaListadoPodcast');
  	let listadoPodcast :Podcast[] = new Array;
  	if(fechaLimitePodcasts!=null){
  		let fechaLimite = new Date(parseInt(fechaLimitePodcasts,0));
  		let fechaActual = new Date;
  		if(fechaActual>fechaLimite || fechaLimite==null){
  			listadoPodcast=null;
  		}else{
  			JSON.parse(listaPodcastsGuardada).map(x=>{
  				let podcast= new Podcast(x.id, x.image, x.title, x.artist);
  				listadoPodcast.push(podcast);
  			});
  		}
  	}else{
  		listadoPodcast=null;
  	}
  	return listadoPodcast;
  }

 //se almacena Listado Podcast en cliente
 setPodcastListadoLocal(listadoPodcast:Podcast[]){
 	const date = new Date;
 	localStorage.setItem('listadoPodcast',JSON.stringify(listadoPodcast));
 	localStorage.setItem('fechaListadoPodcast', JSON.stringify(date.setDate(date.getDate() + 1)));
 }

  //se obtiene Detalle Podcast de almacenamiento local
  getDetallePodcastLocal(podcastId:String):PodcastDetalle{
  	const detallePodcastGuardado = localStorage.getItem('detalle_'+podcastId);
  	const fechaLimiteDetalle = localStorage.getItem('fechadetalle_'+podcastId);
  	let detallePodcast;
  	if(fechaLimiteDetalle!=null){
  		let fechaLimite = new Date(parseInt(fechaLimiteDetalle,0));
  		let fechaActual = new Date;
  		if(fechaActual>fechaLimite || fechaLimite==null){
  			detallePodcast=null;
  		}else{
  		    let detalleGuardado	= JSON.parse(detallePodcastGuardado)
  				let listadoEpisodios:PodcastEpisode[] = new Array;
  				let title=detalleGuardado.title;
  				let image = detalleGuardado.image;
  				let id = detalleGuardado.id;
  				let artist = detalleGuardado.artist;
  				let description = detalleGuardado.description
  				detalleGuardado.episodes.map(episode=>{
  					let episodioPodCast = new PodcastEpisode(episode.id,
  						episode.title, episode.date, episode.duration, 
  						episode.description, episode.episodeUrl, episode.type);
  					listadoEpisodios.push(episodioPodCast);
  						
  				});
  				detallePodcast = new PodcastDetalle(id, image, title, artist, description, listadoEpisodios);			
  			
  		}
  	}else{
  		detallePodcast=null;
  	}
  	return detallePodcast;
  }

 //se almacena Detalle Podcast en cliente
 setDetallePodcastLocal(detallePodcast:PodcastDetalle){
 	const date = new Date;
 	localStorage.setItem('detalle_'+detallePodcast.id,JSON.stringify(detallePodcast));
 	localStorage.setItem('fechadetalle_'+detallePodcast.id, JSON.stringify(date.setDate(date.getDate() + 1)));
 }


 private handleError(error: HttpErrorResponse) {

    console.error('Error code ' +error.status +
      ', traza: '+error.error);
  
  return throwError(
    'Se ha producido un error, intentelo más tarde');
}
}