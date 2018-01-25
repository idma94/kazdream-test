import {Component, OnInit} from '@angular/core';
import {ServerService} from './shared/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  photos = [];
  loading = false;
  page = 1;
  perPage = 20;
  total = 0;

  constructor(private server: ServerService) {
  }

  ngOnInit(): void {
    this.getPhotos(this.page);
  }

  getPhotos(page) {
    const options = {
      page: page,
      per_page: this.perPage
    };
    this.server.getPhotos(options).subscribe(res => {
      this.total = res.total;
      this.photos = res.photos;
      this.page = page;
    });
  }

  pageChange(page: number): void {
    this.page = page;
  }
}
