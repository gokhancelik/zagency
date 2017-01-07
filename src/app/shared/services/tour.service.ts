import { TourDestinationService } from './tourDestination.service';
import { TourScheduleService } from './tourSchedule.service';
import { TourProgramService } from './tourProgram.service';
import { TourCategoryService } from './tourCategory.service';
import { CompanyService } from './company.service';
import { TourDestination } from './../models/tourDestination.model';
import { AuthService } from './../../security/auth.service';
import { Tour, TourSchedule, TourProgram } from '../models';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class TourService extends BaseFirebaseService<Tour> {
    constructor(private _af: AngularFireDatabase,
        private _authService: AuthService,
        private companyService: CompanyService,
        private tourCategoryService: TourCategoryService,
        private tourProgramService: TourProgramService,
        private tourScheduleService: TourScheduleService,
        private tourDestinationService: TourDestinationService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'tours/', fb, _authService);
    }
    public fromJson(obj) {

        return Tour.fromJson(obj);
    }
    public mapRelationalObject(obj: Tour) {
        obj.companyObj = this.companyService.getByKey(obj.company);
        obj.tourCategoryObj = this.tourCategoryService.getByKey(obj.tourCategory);
        obj.tourProgramObjList = this.tourProgramService.getByTourKey(obj.id);
        obj.tourScheduleObjList = this.tourScheduleService.getByTourKey(obj.id);
        obj.tourDestinationObjList = this.tourDestinationService.getByTourKey(obj.id);
        return obj;
    }
    public fromJsonList(array) {
        return Tour.fromJsonList(array);
    }
    public getByKey(key): Observable<Tour> {
        let that = this;
        const tour$ = this._af.object(this.getRoute() + '/' + key)
            .map(this.fromJson)
            .map(t => { return that.mapRelationalObject(t); });
        return tour$;
    }
    // public getByTourCategoryKey(tourCategoryKey: string): Observable<Tour[]> {
    //     const toursInCompany$ = this._authService.getUserInfo().switchMap(
    //         currentUser =>
    //             this._af.list(this.getRoute(),
    //                 {
    //                     query: {
    //                         orderByChild: 'company',
    //                         equalTo: currentUser.user.company
    //                     }
    //                 })).map(this.fromJsonList)
    //         .map(tours => {
    //             return tours.map(this.mapRelationalObject);
    //         });
    //     return toursInCompany$;
    // }
    public getAll(): Observable<Tour[]> {
        let that = this;
        const toursInCompany$ = this._authService.getUserInfo().switchMap(
            currentUser =>
                this._af.list(this.getRoute(),
                    {
                        query: {
                            orderByChild: 'company',
                            equalTo: currentUser.user.company
                        }
                    })).map(that.fromJsonList)
            .map(tours => {
                return tours.map(t => { return that.mapRelationalObject(t); });
            });

        return toursInCompany$;
    }
    public add(value: Tour) {
        this._authService.getUserInfo().take(1).subscribe(user => {
            if (user && user.user) {
                value.company = user.user.company;
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                value = super.preparePreCreateByUser(value, user.user);
                updates[this.getRoute() + '/' + newPostKey] = value;
                value.id = newPostKey;
                updates['/companies/' + value.company + '/tours/' + newPostKey] = true;
                updates['/tourCategories/' + value.tourCategory + '/tours/' + newPostKey] = true;
                super.firebaseUpdate(updates);
            }
        });
    }
    public delete(key: string) {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                let value = super.preparePreDelete();
                updates[this.getRoute() + '/' + key] = value;
                updates['/companies/' + data.company + '/tours/' + data.id] = null;
                updates['/tourCategories/' + data.tourCategory + '/tours/' + data.id] = null;
                this.tourScheduleService.getByTourKey(key).take(1).subscribe(
                    tss => {
                        tss.forEach(ts => {
                            updates['/tourSchedules/' + ts.id] = null;
                        });
                        super.firebaseUpdate(updates);
                    }
                );
                this.tourProgramService.getByTourKey(key).take(1).subscribe(
                    tss => {
                        tss.forEach(ts => {
                            updates['/tourPrograms/' + ts.id] = null;
                        });
                        super.firebaseUpdate(updates);
                    }
                );
                this.tourDestinationService.getByTourKey(key).take(1).subscribe(
                    tss => {
                        tss.forEach(ts => {
                            updates['/tourDestinations/' + ts.id] = null;
                        });
                        super.firebaseUpdate(updates);
                    }
                );
            }
        );
    }

    public getTourPrograms(key): Observable<TourProgram[]> {
        const tp$ = this._af.list(`tourPrograms/`,
            { query: { orderByChild: 'tour', equalTo: key } })
            .map(TourProgram.fromJsonList);
        return tp$;
    }
    public getTourSchedules(key): Observable<TourProgram[]> {
        const tp$ = this._af.list(`tourSchedule/`,
            { query: { orderByChild: 'tour', equalTo: key } })
            .map(TourProgram.fromJsonList);
        return tp$;
    }
    public getTourDestinations(key): Observable<TourDestination[]> {
        const td$ = this._af.list(`tourDestinations/`,
            { query: { orderByChild: 'tour', equalTo: key } })
            .map(TourDestination.fromJsonList);
        return td$;
    }
}

