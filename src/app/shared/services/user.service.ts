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
        private _authService: AuthService, @Inject(FirebaseRef) fb) {
        super(_af, 'users', fb, _authService);
    }
    fromJson(obj) {
        return User.fromJson(obj);
    }
    fromJsonList(array) {
        return User.fromJsonList(array);
    }
    getAll(): Observable<User[]> {
        const users$ = this._authService.getUserInfo().switchMap(user => this._af.list('users',
            {
                query: {
                    orderByChild: 'company',
                    equalTo: user.user.company
                }
            }))
            .map(this.fromJsonList);
        return users$;
    }
    add(value: User): void {
        this._authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    value.company = user.user.company;
                    value.createdAt = new Date();
                    value.modifiedAt = new Date();
                    value.createdBy = user.user.email;
                    value.modifiedBy = user.user.email;
                    
                    let newPostKey = this._af.list('users').push(null).key;
                    let updates = {};
                    updates['/users/' + newPostKey] = value;
                    updates['/companies/' + user.user.company + '/users/' + newPostKey] = true;
                    super.firebaseUpdate(updates);
                }
            }
        );
    }
    update(key: string, value: User): void {
        // this.authService.getUserInfo().subscribe(
        //     user => {
        //         if (user.user) {
        //             value.company = user.user.company;
        //             // let updates = {};
        //             // TODO: implement many to many
        //             // if (value.role) {
        //             //     updates['/roles/' + value.role + '/users/' + value.$key] = true;
        //             // }
        this._af.object(super.getRoute() + '/' + key).update(value);

        // updates['/users/' + key] = value;
        // this.firebaseUpdate(updates);
        //         }
        //     }
        // );
    }


    delete(key: string) {
        this.authService.getUserInfo().subscribe(
            user => {
                if (user[0]) {
                    this._af.object('users' + '/' + key).remove();
                    this.companyService.removeUser(user.user.company, key);
                }
            }
        );
    }
    getUserByEmail(email: string): Observable<User[]> {
        return this._af.list('users', { query: { orderByChild: 'email', equalTo: email } })
            .map(this.fromJsonList);
    }
}
