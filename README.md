
# Angular Skills Test For LookThink

## Scope
>Using angular, google maps, google places api, create a simple page where the user can search for places of interest near dupont circle, showing up to the first ten results. Extra credit for paginating through the results and providing some sort of filter or sort.
Extra extra credit for showing pins on a map and clicking a pin shows the name of the place and a few interesting details about it in a region below the map

## User Stories
* As a user I can search for places of interest nearby Dupont Circle
* As a user I can move the map and search for places of interest near my current view
* As a user I can sort the results shown to me by price or by ratings
* As a user I can view more results than are initially shown to me
* As a user I can click on a business to get more information about it

## Code Organization
### Auto Generated files
The majority of the code at the root and directly inside `src` is auto generated using `Angular CLI`. The one exception being the `.gitignore` which was found and imported after a quick google for "Angular .gitignore".

`./src/index.html` was edited to include the Google Map API and import Google Fonts.

There was also a small modification to the `./tsconfig.json` to change the `target` `compilerOption` from `es5` to `es6`.

### Custom Code
The code written for the project lives inside the `./src/app` directory which includes the various components and services constructed for the project. Each component lives in its own directory which is selfcontained with its HTML template, CSS, and Typescript files, the boilerplate for which are detailed below.

#### Components 
The `place` component is a modular card that contains information about the first 10 places that are returned from a search.

The `place-list` component is a container that holds up to 10 places as well as placeholder buttons for yet to be implemented functionality for sorting and paginating the list of places. This component makes use of the `place-results` service to be notified of changes in the list of places.

The `place-search` component is a form which contains a text input and a button that allows for new searches to be executed on the given map. This component is also responsible for returning the returned search results to the `place-results` service with an updated list which notifies observers of changes to its data.
During search retrival pins are drawn on the map representing the geographic position of each location returned and the map is scaled to fit all pins within its bound.

The `google-map` component holds the Google Map that is being drawn and that any new search is being operated on, using its center as the origin point of a search.

The `details-panel` component is a work in progress that will hold additional details about a place when either a pin or a `place` card is clicked.

#### Services
The `place-results` service is responsible for providing access to the list of places retrived from a search within the app to components that need it, mainly the `place-search` and `place-list` component. 

the `search` service is a planned refactor to take search functionality out of the `place-search` component and provide access to it across the app.


## Boilerplate

### Components Boilerplate
New components are auto generated using `Angular CLI`. This generates an empty HTML and CSS file and a typescript with the following boilerplate in it. 
	
~~~~javascript
@Component({
  selector: 'component-name',
  templateUrl: './component-name.component.html',
  styleUrls: ['./component-name.component.css']
})
export class DeleteThisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
~~~~
### Services Boilerplate
New services are auto generated using `Angular CLI`. This generates a Typescript file with the following boilerplate in it.

~~~~javascript
import { Injectable } from '@angular/core';

@Injectable()
export class DeleteThisService {

  constructor() { }

}
~~~~
