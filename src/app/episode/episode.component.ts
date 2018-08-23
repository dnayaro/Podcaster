import { Component, OnInit } from '@angular/core';
import {Params, ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {PodcasterService} from '../services/podcaster.service';
import {DataServiceService} from '../services/data-service.service';
import {Podcast} from '../shared/podcast';
import {PodcastDetalle} from '../shared/podcastDetalle';
import {PodcastEpisode} from '../shared/podcastEpisode';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {
  podcastDetalle : PodcastDetalle;
  podcastEpisode : PodcastEpisode;
  constructor(private podcasterService: PodcasterService,
  			  private route: ActivatedRoute,
  	          private location: Location,
  	          private dataService: DataServiceService) { }

  ngOnInit() {
  	let idPodcast = this.route.snapshot.params['podcastId'];
  	let idEpisode = this.route.snapshot.params['episodeId'];

  	this.dataService.currentPodcast.subscribe(podcastDetalle =>this.podcastDetalle = podcastDetalle);
  	this.podcastEpisode=this.findEpisode(this.podcastDetalle, Number(idEpisode));
  }

  findEpisode(podcastRecibido: PodcastDetalle, idEpisodio:number): PodcastEpisode{
  	return podcastRecibido.episodes.find(episodio=>episodio.id==idEpisodio);

  }

}
