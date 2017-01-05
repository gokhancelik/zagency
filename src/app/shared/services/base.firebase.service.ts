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
        return this.af.list(this._route, { query: { orderByChild: 'isDelete', equalTo: false } })
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
        let that = this;
        this.preparePreCreate(value).subscribe(
            d => {
                let nd = that.mapObjectToFirebaseObject(d);
                that.af.list(that._route).push(nd);
            }
        );
    }
    update(key: string, value: T) {
        let that = this;
        this.preparePreModify(value).subscribe(d => {
            let nd = that.mapObjectToFirebaseObject(d);
            that.af.object(this._route + '/' + key).update(d);
        });
    }
    delete(key: string) {

        this.preparePreDelete().subscribe(
            value => {
                this.af.object(this._route + '/' + key).update(value);
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
    mapObjectToFirebaseObject(value: T): any {
        let updatedObj = {};
        Object.keys(value).forEach(k => {
            if (value[k] instanceof Date) {
                updatedObj[k] = (value[k] as Date).getTime();
            }
            else
                updatedObj[k] = value[k];
        });
        return updatedObj;
    }
    preparePreModify(value: T): Observable<T> {
        return this.authService.getUserInfo().map(
            user => {
                if (user && user.user) {
                    value.modifiedAt = new Date();
                    value.modifiedBy = user.user.email;
                    return value;
                }
                else {
                    alert('Giriş yapmadan bu işlemi yapamazsınız');
                    throw 'Giriş yapmadan bu işlemi yapamazsınız';
                }
            }
        );
    }
    preparePreDelete(): Observable<any> {
        return this.authService.getUserInfo().map(
            user => {
                if (user && user.user) {
                    let value = {
                        deletedAt: new Date(),
                        deletedBy: user.user.email,
                        isDelete: true
                    }
                    return value
                }
                else {
                    alert('Giriş yapmadan bu işlemi yapamazsınız');
                    throw 'Giriş yapmadan bu işlemi yapamazsınız';
                }
            }
        );
    }
    preparePreCreate(value: T): Observable<T> {
        return this.authService.getUserInfo().map(
            user => {
                if (user && user.user) {
                    value.createdAt = new Date();
                    value.modifiedAt = new Date();
                    value.createdBy = user.user.email;
                    value.modifiedBy = user.user.email;
                    return value;
                }
                else {
                    alert('Giriş yapmadan bu işlemi yapamazsınız');
                    throw 'Giriş yapmadan bu işlemi yapamazsınız';
                }
            }
        );
    }
    abstract fromJsonList(array);
    abstract fromJson(obj: any);
}
