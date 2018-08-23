import {Routes} from '@angular/router';

import{PodcastsListComponent} from '../podcasts-list/podcasts-list.component';
import{DetallePodcastComponent} from '../detalle-podcast/detalle-podcast.component';
import{EpisodeComponent} from '../episode/episode.component';
export const routes: Routes = [
  {path: '',component:PodcastsListComponent},
  {path: 'podcast/:podcastId',component:DetallePodcastComponent},
  {path: 'podcast/:podcastId/episode/:episodeId',component:EpisodeComponent},
  {path: '', redirectTo: '' , pathMatch:'full'}
];