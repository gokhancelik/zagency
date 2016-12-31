import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { User } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { CompanyService } from './';
import { AuthService } from '../../security/auth.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class UserService extends BaseFirebaseService<User> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase, private companyService: CompanyService,
        private authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'users');
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return User.fromJson(obj);
    }
    fromJsonList(array) {
        return User.fromJsonList(array);
    }
    getAll(): Observable<User[]> {
        const users$ = this.authService.getUserInfo().switchMap(user => this._af.list('users',
            {
                query: {
                    orderByChild: 'company',
                    equalTo: user.company
                }
            }))
            .map(this.fromJsonList);
        return users$;
    }
    add(value: User): void {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user[0]) {
                    value.company = user[0].company;
                    let newPostKey = this._af.list('users').push(null).key;
                    let updates = {};
                    updates['/users/' + newPostKey] = value;
                    updates['/companies/' + user[0].company + '/' + newPostKey] = true;
                    this.firebaseUpdate(updates);
                }
            }
        );
    }
    update(key: string, value: User): void {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user[0]) {
                    value.company = user[0].company;
                    // let updates = {};
                    // TODO: implement many to many
                    // if (value.role) {
                    //     updates['/roles/' + value.role + '/users/' + value.$key] = true;
                    // }
                    this._af.object(super.getRoute() + '/' + key).update(value);

                    // updates['/users/' + key] = value;
                    // this.firebaseUpdate(updates);
                }
            }
        );
    }
    firebaseUpdate(dataToSave) {
        const subject = new Subject();

        this.sdkDb.update(dataToSave)
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

    delete(key: string) {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user[0]) {
                    this._af.object('users' + '/' + key).remove();
                    this.companyService.removeUser(user[0].company, key);
                }
            }
        );
    }
    getUserByEmail(email: string): Observable<User[]> {
        return this._af.list('users', { query: { orderByChild: 'email', equalTo: email } })
            .map(this.fromJsonList);
    }
}
