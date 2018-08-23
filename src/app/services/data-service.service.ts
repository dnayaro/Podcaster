import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

import {PodcastDetalle, PodcastEpisode} from '../shared/podcast';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  //INIT default value to BehaviorSubject
  private pocastEpisode = new PodcastEpisode(1, 'default', 'default', 'default', 'default', 'default','default');
  private episodeArray = [this.pocastEpisode];
  private podcastDetalle = new PodcastDetalle('default', 'default', 'default', 'default','default', this.episodeArray);
  //END 

  private podcastData = new BehaviorSubject(this.podcastDetalle);
  
  currentPodcast = this.podcastData.asObservable();

  constructor() { }
  changePodcast(podcastDetalle:PodcastDetalle){
  	this.podcastData.next(podcastDetalle);
  }
}
