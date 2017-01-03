import { AuthService } from './../../security/auth.service';
import { CompanySpec, Company } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class CompanySpecService extends BaseFirebaseService<CompanySpec> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'companySpecs', fb);
    }
    fromJson(obj) {
        return CompanySpec.fromJson(obj);
    }
    fromJsonList(array) {
        return CompanySpec.fromJsonList(array);
    }

    add(value: CompanySpec) {
        // this.authService.getUserInfo().take(1).subscribe(user => {
        //     if (user[0]) {
                // let newData = {
                //     description: value.description,
                //     day: value.day,
                //     tour: value.tour,
                //     company: user[0].company,
                // };
                let newPostKey = this._af.list(this.getRoute()).push(null).key;
                let updates = {};
                updates[this.getRoute() + '/' + newPostKey] = value;
                updates['companies/' + value.company + '/specs'] = newPostKey;
                super.firebaseUpdate(updates);

    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + key] = null;
                updates['/companies/' + data.company + '/specs'] = null;
                super.firebaseUpdate(updates);
            }
        );
    }
}
