import { ControlValueAccessor } from '@angular/forms';
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
    public fromJson(obj) {
        return User.fromJson(obj);
    }
    public fromJsonList(array) {
        return User.fromJsonList(array);
    }
    public getAll(): Observable<User[]> {
        // const users$ = this._authService.getUserInfo().switchMap(user => this._af.list('users',
        //     {
        //         query: {
        //             orderByChild: 'company',
        //             equalTo: user.user.company
        //         }
        //     }))
        //     .map(this.fromJsonList);
        let users$ = this._af.list(this.getRoute()).map(
            users => {
                return users.map(u => {
                    u.companyObj = this.companyService.getByKey(u.company);
                    return u;
                });
            }
        );
        users$.subscribe(u => {
            u[0].companyObj.subscribe(comp => console.log(comp));
            console.log(u)
        });
        return users$;
    }
    public add(value: User): void {
        let that = this;

        that._authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    value.company = user.user.company;
                    value = super.preparePreCreateByUser(value, user.user);
                    that._af.object('companies/' + value.company).take(1).subscribe(d => {
                        value.companyName = d.name;
                        let newPostKey = that._af.list('users').push(null).key;
                        let updates = {};
                        updates['/users/' + newPostKey] = value;
                        updates['/companies/' + user.user.company + '/users/' + newPostKey] = true;
                        super.firebaseUpdate(updates);
                    });
                }
            },
            error => { console.log(error) },
            () => console.log("Success")
        );
    }
    public delete(key: string) {
        this._authService.getUserInfo().subscribe(
            user => {
                if (user && user.user) {
                    let deleted = super.preparePreDeleteByUser(user.user);
                    let updates = {};
                    updates['users/' + key] = deleted;
                    updates['companies/' + user.user.company + '/users/' + key] = null;
                    super.firebaseUpdate(updates);
                }
            }
        );
    }
    public getUserByEmail(email: string): Observable<User[]> {
        return this._af.list('users', { query: { orderByChild: 'email', equalTo: email } })
            .map(this.fromJsonList);
    }
}
