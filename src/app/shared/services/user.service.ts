import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
import { User } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class UserService extends BaseFirebaseService<User> {
    constructor(private _af: AngularFireDatabase) {
        super(_af, 'users');
    }
    fromJson(obj) {
        return User.fromJson(obj);
    }
    fromJsonList(array) {
        return User.fromJsonList(array);
    }
}
