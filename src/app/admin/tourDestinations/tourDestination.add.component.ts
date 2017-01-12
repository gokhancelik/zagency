import { GoogleGeoCodingService } from './../../shared/services';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { TourDestination, Tour } from '../../shared/models';
import { TourDestinationService } from '../../shared/services/index';
import { AddComponent } from '../../core/add.component';
import { DynamicFormControlModel, DynamicFormService } from '@ng2-dynamic-forms/core';
import { TOURDESTINATION_FORM_MODEL } from './tourDestination-form.model';
@Component({
    selector: 'tourDestination-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'form.component.html'
})
export class TourDestinationAddComponent extends AddComponent<TourDestination> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourDestination;
    destinations: Array<TourDestination> = Array<TourDestination>();
    tour: Tour;
    locations: Array<any> = new Array<any>();
    constructor(private _service: TourDestinationService, dynamicFormService: DynamicFormService,
        private geoService: GoogleGeoCodingService) {
        super(TourDestination, dynamicFormService, _service, TOURDESTINATION_FORM_MODEL);
    }
    open(): void {
        this.model = new TourDestination();
        this.model.tour = this.tour.id;
        super.open();
    }
    setTour(tour: Tour): void {
        this.tour = tour;
    }
    search(address) {
        this.geoService.search(address).subscribe(data => {
            this.locations = data;
        });
    }
    addDestination(l) {
        let d = new TourDestination();
        d.tour = this.tour.id;
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
        let that = this;
        this.destinations.forEach(d => {
            this._service.preparePreCreate(d).subscribe(
                data => that.tour.tourDestinationObjList.push(data));
        });
    }
}
