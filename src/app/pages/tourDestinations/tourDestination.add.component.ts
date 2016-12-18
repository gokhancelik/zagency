import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../core/add.component';
import { TourDestination } from '../../shared/models';
import { TourDestinationService, GoogleGeoCodingService } from '../../shared/services';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURDESTINATION_FORM_MODEL } from './tourDestination-form.model';

@Component({
    selector: 'tourDestination-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'tourDestination.form.component.html'
})
export class TourDestinationAddComponent extends AddComponent<TourDestination>  {
    _service: TourDestinationService;
    tourId: number;
    locations: any;
    destinations: Array<TourDestination> = Array<TourDestination>();
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(service: TourDestinationService, dynamicFormService: DynamicFormService,
        private geoService: GoogleGeoCodingService) {
        super(service, TourDestination, dynamicFormService, TOURDESTINATION_FORM_MODEL);
        this._service = service;
    }
    open(): void {
        this.model = new TourDestination();
        this.model.tourId = this.tourId;
        super.open();
    }
    setTourId(tourId: number): void {
        this.tourId = tourId;
    }
    search(address) {
        this.geoService.search(address).subscribe(data => {
            this.locations = data;
        });
    }
    addDestination(l) {
        let d = new TourDestination();
        d.tourId = this.tourId;
        d.id = 0;
        d.name = l.formatted_address;
        d.latitude = l.geometry.location.lat;
        d.longitude = l.geometry.location.lng;
        this.destinations.push(d);
    }
    removeDestination(d) {
        let index = this.destinations.indexOf(d);
        this.destinations.splice(index, 1);
    }
    saveAll() {
        let j = 0;
        for (let i = 0; i < this.destinations.length; i++)
            this._service.add(this.destinations[i]).subscribe(data => {
                j++;
                if (this.destinations.length === j) {
                    this.destinations = new Array<TourDestination>();
                    super.close();
                }
            });
    }
}
