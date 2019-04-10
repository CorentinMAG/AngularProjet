import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {BookService} from '../history.service';
import {HistoryService} from '../history.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  youtube_url;     //on récupère notre url
  controle:boolean = false;  //on crée une variable qu'on initialise à false pour notre ngIf
  afficherHisto:boolean = false; //pour afficher ou non le component historique
  afficherBook:boolean = false;  //pour afficher ou non le component bookmarks


  constructor(public book:BookService,
              public histo:HistoryService) {
  }



  onSubmit(form:NgForm){   //fct exécuté quand on soumet le formulaire
  	this.youtube_url = form.value['inputURL'];
    this.youtube_url = this.youtube_url.split('=');
    this.youtube_url = this.youtube_url[1];
    this.youtube_url = this.youtube_url.split('&');
    this.youtube_url = this.youtube_url[0];
    this.youtube_url = 'https://www.youtube.com/embed/' + this.youtube_url;
  	this.controle = true;
    this.histo.add(this.youtube_url);
    
  }

  affHisto(){
    this.afficherHisto = true;
    this.afficherBook = false;
  }

  affBook(){
    this.afficherHisto = false;
    this.afficherBook = true;
  }


  ngOnInit() { 

  }


}
