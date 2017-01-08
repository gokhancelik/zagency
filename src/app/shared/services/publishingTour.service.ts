import { TourService } from './tour.service';
import { TourScheduleService } from './tourSchedule.service';
import { AuthService } from './../../security/auth.service';
import { PublishingTour, Tour, TourSchedulePrice, TourScheduleSpec } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class PublishingTourService extends BaseFirebaseService<PublishingTour> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        private companyService: CompanyService, private tourScheduleService: TourScheduleService,
        private tourService: TourService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'publishingTours', fb, _authService);
    }
    public mapRelationalObject(obj: PublishingTour) {
        obj.distributorObj = this.companyService.getByKey(obj.distributor);
        obj.publisherObj = this.companyService.getByKey(obj.publisher);
        obj.tourScheduleObj = this.tourScheduleService.getByKey(obj.tourSchedule);
        obj.tourObj = this.tourService.getByKey(obj.tour);
        return obj;
    }
    public fromJson(obj) {
        return PublishingTour.fromJson(obj);
    }
    public fromJsonList(array) {
        return PublishingTour.fromJsonList(array);
    }
    public updateRatio(key: string, value: number): void {
        this._af.object(this.getRoute() + '/' + key).update({ ratio: value });
    }
    public updateActive(key: string, value: boolean): void {
        this._af.object(this.getRoute() + '/' + key).update({ active: value });
    }
    // public add(value: PublishingTour) {

    //     let newPostKey = this._af.list(this.getRoute()).push(null).key;
    //     let updates = {};
    //     updates[this.getRoute() + '/' + newPostKey] = value;
    //     updates['tourSchedules/' + value.tourSchedule + '/publishingTours/' + newPostKey] = true;

    // }
    // public delete(key: string): void {
    //     this.getByKey(key).take(1).subscribe(
    //         data => {
    //             let updates = {};
    //             updates[this.getRoute() + '/' + key] = null;
    //             updates['tourSchedules/' + data.tourSchedule + '/publishingTours/' + data.id] = null;
    //             super.firebaseUpdate(updates);
    //         }
    //     );
    // }

}

