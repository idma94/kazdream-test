import {Component, OnInit} from '@angular/core';
import {ServerService} from './shared/server.service';
import {trigger, state, style, transition, animate, keyframes, stagger, query} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('ForEnter', [
      transition('* => *', [
        query(':enter', [
            style({
              opacity: '0',
              transform: 'translateX(-100%)'
            }),
            stagger(100, [
              animate('.3s ease-out', style({
                opacity: '1',
                transform: 'translateX(0)'
              })),
            ]),
          ],
          {optional: true}
        ),
        query(':leave', [
          animate('.2s ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ], {optional: true})
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  photos = [];
  page = 1;
  perPage = 12;
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
    this.photos = [];
    this.server.getPhotos(options).subscribe(res => {
      console.log(res);
      this.total = res.total;
      this.photos = res.photos;
      this.page = page;
    });
  }
}
