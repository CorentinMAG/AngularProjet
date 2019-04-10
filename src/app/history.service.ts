export class HistoryService{
	tableau:any[]=[];
	url_replay;   //url a passer a video-view pour être rejoué

	

	add(url){      //si url n'existe pas dans le tableau on push sinon on fait rien
		if (this.tableau.indexOf(url) ==-1){
			this.tableau.push(url);
		}
	}

	alert(value:string){
		this.url_replay=value;
	}
}

export class BookService{
	Book:any[]=[];
	urlBooked_replay;
	addToBook(url){
		if(this.Book.indexOf(url)==-1){
			this.Book.push(url);
			console.log('added to Bookmark!');
		}
	}
	OnAlertClick(value){
		this.urlBooked_replay=value;
	}

}



