import { AuthService } from './../../security/auth.service';
import { IService } from '../../core/IService.service';
import { BaseModel } from '../models/base.model';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
export abstract class BaseFirebaseService<T extends BaseModel> implements IService<T>{
    _sdkDb: any;
    constructor(private af: AngularFireDatabase, private _route: string,
        _fb: any = null, private authService: AuthService) {
        this._sdkDb = _fb ? _fb.database().ref() : null;
    }
    getAll(): Observable<T[]> {
        return this.af.list(this._route,{query:{orderByChild:'isDelete',equalTo:false}})
            .map(this.fromJsonList);
    }
    public getRoute(): string {
        return this._route;
    }
    public setRoute(value) {
        this._route = value;
    }
    getByKey(key: string): Observable<T> {
        return this.af.object(this._route + '/' + key)
            .map(this.fromJson);
    }
    add(value: T) {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    value.createdAt = new Date().getTime();
                    value.modifiedAt = new Date().getTime();
                    value.createdBy = user.user.email;
                    value.modifiedBy = user.user.email;
                    this.af.list(this._route).push(value);
                }
            }
        );

    }
    update(key: string, value: T) {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    value.modifiedAt = new Date().getTime();
                    value.modifiedBy = user.user.email;
                    this.af.object(this._route + '/' + key).update(value);
                }
            }
        );
    }
    delete(key: string) {

        this.authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    let value = {
                        deletedAt: new Date().getTime(),
                        deletedBy: user.user.email,
                        isDelete: true
                    }
                    this.af.object(this._route + '/' + key).update(value);
                    // this.af.object(this._route + '/' + key).remove();
                }
            }
        );




    }
    firebaseUpdate(dataToSave) {
        const subject = new Subject();
        if (this._sdkDb) {
            this._sdkDb.update(dataToSave)
                .then(
                val => {
                    subject.next(val);
                    subject.complete();

                },
                err => {
                    subject.error(err);
                    subject.complete();
                }
                );
            return subject.asObservable();
        }
        else {
            alert('sdk eklenmeden firebaseUpdate methodu çalıştırılamaz.');
        }
    }
    abstract fromJsonList(array);
    abstract fromJson(obj: any);
}
