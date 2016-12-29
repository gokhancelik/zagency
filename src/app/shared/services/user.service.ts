import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { AngularFireDatabase, FirebaseRef } from 'angularfire2';
import { User } from '../models';
@Injectable()
export class UserService {

    constructor(private af: AngularFireDatabase) {
    }
    getAll(): Observable<User[]> {
        return this.af.list('users')
            .map(User.fromJsonList);
    }

}