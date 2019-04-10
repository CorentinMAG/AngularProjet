import { Component, OnInit } from '@angular/core';
import{BookService} from '../history.service';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {


  constructor(public book:BookService) { }

  ngOnInit() {
  }

}
