export class Podcast{
	id:string;
	image:string;
	title:string;
	artist:string;

	constructor(id:string, image:string,title:string, artist:string){
		this.id = id;
		this.image = image;
		this.title = title;
		this.artist = artist;
	}
}
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

export class PodcastEpisode{
	id:number;
	title:string;
	date:string;
	duration:string;
	description:string;
	episodeUrl:string;
	type:string

	constructor(id:number,title:string, date:string, duration:string, description:string, episodeUrl:string, type:string){
		this.id = id;
		this.title = title;
		this.date = date;
		this.duration = duration;
		this.description = description;
		this.episodeUrl = episodeUrl;
		this.type = type;
	}

}