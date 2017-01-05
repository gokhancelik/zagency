import { AuthService } from './../../security/auth.service';
import { CompanySpec, Company } from '../models';
import { CompanyService } from './';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class CompanySpecService extends BaseFirebaseService<CompanySpec> {
    constructor(private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'companySpecs', fb, _authService);
    }
    fromJson(obj) {
        return CompanySpec.fromJson(obj);
    }
    fromJsonList(array) {
        return CompanySpec.fromJsonList(array);
    }

    add(value: CompanySpec) {
        let newPostKey = this._af.list(this.getRoute()).push(null).key;
        let updates = {};
        updates[this.getRoute() + '/' + newPostKey] = value;
        updates['companies/' + value.company + '/specs'] = newPostKey;
        super.firebaseUpdate(updates);
    }
    delete(key: string) {
        this._authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    let deleted = super.preparePreDeleteByUser(user.user);
                    let updates = {};
                    updates[this.getRoute() + '/' + key] = deleted;
                    updates['companies/' + user.user.company + '/specs'] = null;
                    super.firebaseUpdate(updates);
                }
            }
        );
    }
}
