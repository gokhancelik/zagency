import { IService } from '../../core/IService.service';
import { BaseModel } from '../models/base.model';
import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
export abstract class BaseFirebaseService<BaseModel> implements IService<BaseModel>{
    _sdkDb: any;
    constructor(private af: AngularFireDatabase, private _route: string,
        _fb: any = null) {
        this._sdkDb = _fb ? _fb.database().ref() : null;
    }
    getAll(): Observable<BaseModel[]> {
        return this.af.list(this._route)
            .map(this.fromJsonList);
    }
    public getRoute(): string {
        return this._route;
    }
    public setRoute(value) {
        this._route = value;
    }
    getByKey(key: string): Observable<BaseModel> {
        return this.af.object(this._route + '/' + key)
            .map(this.fromJson);
    }
    add(value: BaseModel) {
        this.af.list(this._route).push(value);
    }
    update(key: string, value: BaseModel) {
        this.af.object(this._route + '/' + key).update(value);
    }
    delete(key: string) {
        this.af.object(this._route + '/' + key).remove();
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
