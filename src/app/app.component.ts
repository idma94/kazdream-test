import {Component, OnInit} from '@angular/core';
import {ServerService} from './shared/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos = [];
  total = 0;

  constructor(private server: ServerService) {
  }

  ngOnInit(): void {
    this.server.getPhotos().subscribe(res => {
      this.total = parseInt(res.headers.get('x-total'), 10);
      this.photos = res.body;
    });
  }
}
