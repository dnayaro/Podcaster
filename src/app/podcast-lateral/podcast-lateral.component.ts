import { Component, Input } from '@angular/core';
import {PodcastDetalle} from '../shared/podcastDetalle';

@Component({
  selector: 'app-podcast-lateral',
  templateUrl: './podcast-lateral.component.html',
  styleUrls: ['./podcast-lateral.component.css']
})
export class PodcastLateralComponent {

  @Input() podcastDetalle: PodcastDetalle;

}
