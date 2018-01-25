import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {PaginationComponent} from './pagination/pagination.component';
import {CardComponent} from './card/card.component';
import {ServerService} from './shared/server.service';
import {CardHeaderComponent} from './card/card-header/card-header.component';
import {CardTitleComponent} from './card/card-title/card-title.component';
import {CardImageComponent} from './card/card-image/card-image.component';


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
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
