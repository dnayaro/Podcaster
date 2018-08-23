import {PodcastEpisode} from './podcastEpisode';
export class PodcastDetalle{
	id:string;
	image:string;
	title:string;
	artist:string;
	description:string;
	episodes: PodcastEpisode[];

	constructor(id:string, image:string, title:string, artist:string, description:string,
		episodes: PodcastEpisode[]){
		this.id = id;
		this.image = image;
		this.title = title;
		this.artist = artist;
		this.description = description;
		this.episodes = episodes;
	}
}