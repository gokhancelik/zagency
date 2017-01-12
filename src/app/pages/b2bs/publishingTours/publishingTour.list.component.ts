import { PublishingTour } from './../../../shared/models/publishingTour.model';
import { PublishingTourService } from './../../../shared/services/publishingTour.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { User } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../../core/index';
import {  PublishingTourAddComponent } from './index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'publishingTour-list',
    templateUrl: 'publishingTour.list.component.html'
})
export class PublishingTourListComponent extends ListComponent<PublishingTour> {
    @ViewChild('addModal') addModal: PublishingTourAddComponent;
    publishingTourList: Observable<PublishingTour[]>;
    title: string = 'Publishing Tours';
    constructor(private _service: PublishingTourService,  private router: Router) {
        super(_service);
        this.publishingTourList = _service.getAll();
    }

}
    

