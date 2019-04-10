import { Component } from '@angular/core';
import {Input} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {HistoryService} from '../history.service';
import{BookService} from '../history.service';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent {

	@Input() YT_url;  //notre url qui provient du component parent
	url_verified:SafeResourceUrl;


	

	constructor(public sanitizer: DomSanitizer,
				public replay:HistoryService,
				public book:BookService) {
	}


	verified_url(){  //on crée une méthode qui permet de faire une url safe
		if (this.replay.url_replay==undefined && this.book.urlBooked_replay==undefined){  //si on a clicqué sur un lien de l'historique on le rejoue
			this.url_verified = this.sanitizer.bypassSecurityTrustResourceUrl(this.YT_url);
			return this.url_verified;
		}
		else if(this.replay.url_replay!=undefined && this.book.urlBooked_replay==undefined){  //si on clique sur un lien du bookmark on le rejoue
			this.url_verified = this.sanitizer.bypassSecurityTrustResourceUrl(this.replay.url_replay);
			this.replay.url_replay=undefined;
			return this.url_verified;
		}

		else if(this.book.urlBooked_replay!=undefined && this.replay.url_replay==undefined){   //si on n'a cliqué ni sur un lien de l'historique ni sur un lien du bookmark on affiche le lien de l'imput
			this.url_verified = this.sanitizer.bypassSecurityTrustResourceUrl(this.book.urlBooked_replay);
			this.book.urlBooked_replay=undefined;
			return this.url_verified;
		}

	}
	
}
