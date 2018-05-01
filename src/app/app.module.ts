import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceSearchComponent } from './place-search/place-search.component';
import { PlaceResultsService } from './services/place-results.service';
import { SearchService } from './services/search.service';

import { GoogleMapComponent } from './google-map/google-map.component';
import { DetailsPanelComponent } from './details-panel/details-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    PlaceListComponent,
    PlaceSearchComponent,
    GoogleMapComponent,
    DetailsPanelComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    PlaceResultsService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
