import { Tour } from '../models';
import { CompanyService } from './';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourService extends BaseFirebaseService<Tour> {
    constructor(private _af: AngularFireDatabase) {
        super(_af, 'users');
    }
    fromJson(obj) {
        return Tour.fromJson(obj);
    }
    fromJsonList(array) {
        return Tour.fromJsonList(array);
    }
    // add(value: Tour) {
    //     value.company = 'Z-Elektronik';
    //     //let company;
    //     //this.companyService.getByKey(value.company).subscribe(data => company);
    //     super.add(value);
    //     this.companyService.addTour(value.company, value);

    // }
}

