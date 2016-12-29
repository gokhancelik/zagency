import { IService } from '../../core/IService.service';
import { BaseModel } from '../models/base.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
export abstract class BaseFirebaseService<BaseModel> implements IService<BaseModel>{
    constructor(private af: AngularFireDatabase, private _route: string) {
    }
    getAll(): Observable<BaseModel[]> {
        return this.af.list(this._route)
            .map(this.fromJsonList);
    }
    getByKey(key: string): Observable<BaseModel> {
        return this.af.object(this._route + '/' + key)
            .map(this.fromJson);
    }
    add(value: BaseModel): void {
        this.af.list(this._route).push(value);
    }
    update(key: string, value: BaseModel): void {
        this.af.object(this._route + '/' + key).update(value);
    }
    delete(key: string): void {
        this.af.object(this._route + '/' + key).remove();
    }
    abstract fromJsonList(array);
    abstract fromJson(obj: any);
}
