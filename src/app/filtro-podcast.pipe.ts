import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPodcast'
})
export class FiltroPodcastPipe implements PipeTransform {

  transform(listadoPodcast: any[], filtro: any): any {
  	if(filtro==null){
  		return listadoPodcast;
  	}else{
  		return listadoPodcast.filter(
  			function(listadoPodcast) {
  				return listadoPodcast.title.toLowerCase().indexOf(filtro.toLowerCase()) > -1 ||
				listadoPodcast.artist.toLowerCase().indexOf(filtro.toLowerCase()) > -1;
  			});
  	}
    
  }

}
