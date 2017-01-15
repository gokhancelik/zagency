import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { TourDestinationService } from './../../shared/services/tourDestination.service';
import { TourDestination } from './../../shared/models/tourDestination.model';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './home.component.html',
  

})
export class HomeComponent implements OnInit {
  tourSearchModel: any;
  destinations: TourDestination[];
  searchDestination = (text$: Observable<string>) =>
    text$
      .map(term => term === '' ? []
        : this.destinations.filter(v => new RegExp(term, 'gi').test(v.name)).slice(0, 10));
  constructor(private tdService: TourDestinationService) {
    this.tourSearchModel = {
      departure: null,
      target: null,
      start: null,
      end: null
    };
    this.tdService.getAll().subscribe(d => this.destinations = d);
  }
  ngOnInit() {

  }
  searchTour(event) {
    console.log(event);
    console.log(this.tourSearchModel);
  }
}
