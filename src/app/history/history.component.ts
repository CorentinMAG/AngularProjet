import { Component,OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {HistoryService} from '../history.service';



@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

	constructor(public urls:HistoryService){}

	@Input() OnUrl;  //on récupère notre url

  ngOnInit(){
  }

  
}
 







