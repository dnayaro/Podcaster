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