import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {PaginationComponent} from './pagination/pagination.component';
import {CardComponent} from './card/card.component';
import {ServerService} from './shared/server.service';
import {CardHeaderComponent} from './card-header/card-header.component';
import {CardTitleComponent} from './card-title/card-title.component';
import {CardImageComponent} from './card-image/card-image.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardImageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
