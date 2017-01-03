import { AuthService } from './../../security/auth.service';
import { CompanyServiceModel } from '../models';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class CompanyServiceService extends BaseFirebaseService<CompanyServiceModel> {
    constructor(private _af: AngularFireDatabase, private authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'companyServices', fb);
    }
    fromJson(obj) {
        return CompanyServiceModel.fromJson(obj);
    }
    fromJsonList(array) {
        return CompanyServiceModel.fromJsonList(array);
    }
    add(value: CompanyServiceModel) {
        let newPostKey = this._af.list(this.getRoute()).push(null).key;
        let updates = {};
        updates[this.getRoute() + '/' + newPostKey] = value;
        updates['companies/' + value.company + '/services/' + newPostKey] = true;
        super.firebaseUpdate(updates);

    }
    delete(key: string): void {
        this.getByKey(key).take(1).subscribe(
            data => {
                let updates = {};
                updates[this.getRoute() + '/' + key] = null;
                updates['/companies/' + data.company + '/services/' + data.id] = null;
                super.firebaseUpdate(updates);
            }
        );
    }


}

