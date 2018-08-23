import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule} from './app-routing/app-routing.module';

import {podcastListURL, apikey} from './shared/baseUrls';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PodcastsListComponent } from './podcasts-list/podcasts-list.component';
import { DetallePodcastComponent } from './detalle-podcast/detalle-podcast.component';
import { PodcastLateralComponent } from './podcast-lateral/podcast-lateral.component';
import { EpisodeComponent } from './episode/episode.component';
import { CargandoComponent } from './cargando/cargando.component';

import { MinutosSegundosPipe } from './minutos-segundos.pipe';
import { FiltroPodcastPipe } from './filtro-podcast.pipe';

import {CargandoService} from './services/cargando.service';
import {DataServiceService} from './services/data-service.service';
import {PodcasterService} from './services/podcaster.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PodcastsListComponent,
    DetallePodcastComponent,
    PodcastLateralComponent,
    EpisodeComponent,
    FiltroPodcastPipe,
    CargandoComponent,
    MinutosSegundosPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PodcasterService, CargandoService,
   DataServiceService, 
   {provide:'podcastListURL', useValue:podcastListURL},
   {provide:'apiKey', useValue:apikey}],
  bootstrap: [AppComponent]
})
export class AppModule { }
