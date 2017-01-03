import { Observable } from 'rxjs/Rx';
import { Role } from './../shared/models/role.model';
import { RoleService } from './../shared/services/role.service';
import { CurrentUser } from './currentUser.model';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { FirebaseAuth, FirebaseAuthState, AuthProviders, AuthMethods, AngularFireDatabase } from 'angularfire2/index';
import { AuthInfo } from './auth.info';
import { User } from '../shared/models/';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    static UNKNOWN_USER = new AuthInfo(null);
    authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);
    constructor(private auth: FirebaseAuth, private fDb: AngularFireDatabase,
        private router: Router) {
    }
    register(email, password): Observable<FirebaseAuthState> {
        return this.fromFirebaseAuthPromise(this.auth.createUser(
            {
                email: email,
                password: password
            }));
    }
    login(email, password): Observable<FirebaseAuthState> {
        return this.fromFirebaseAuthPromise(this.auth.login({ email, password }));
    }
    loginWthFacebook(): Observable<FirebaseAuthState> {
        return this.fromFirebaseAuthPromise(this.auth.login({
            provider: AuthProviders.Facebook,
            method: AuthMethods.Popup
        }));
    }
    loginWithGoogle(): Observable<FirebaseAuthState> {
        return this.fromFirebaseAuthPromise(this.auth.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        }));
    }
    loginWithTwitter(): Observable<FirebaseAuthState> {
        return this.fromFirebaseAuthPromise(this.auth.login({
            provider: AuthProviders.Twitter,
            method: AuthMethods.Popup
        }));
    }
    signUp(email, password) {
        return this.fromFirebaseAuthPromise(this.auth.createUser({ email, password }));
    }
    getUserInfo(): Observable<CurrentUser[]> {
        let user$ = this.auth.take(1)
            .switchMap(value =>
                this.fDb.list('users', {
                    query: { orderByChild: 'email', equalTo: value.auth.email, limitToFirst: 1 }
                })).map(CurrentUser.fromJsonList);
        user$.subscribe(d => console.log(d));

        user$.switchMap(user =>

            this.fDb.list('roles', {
                query: { orderByKey: true, equalTo: user[0] ? user[0].role : "", limitToFirst: 1 }
            }).map(Role.fromJsonList)
        ).subscribe(d => console.log(d));
        return user$;

    }
    /*
     *
     * This is a demo on how we can 'Observify' any asynchronous interaction
     *
     *
     * */

    fromFirebaseAuthPromise(promise): Observable<any> {

        const subject = new Subject<any>();
        let test;
        promise
            .then(res => {
                const authInfo = new AuthInfo(res.$key);
                console.log(authInfo);
                this.authInfo$.next(authInfo);
                subject.next(res);
                subject.complete();
            },
            err => {
                this.authInfo$.error(err);
                subject.error(err);
                subject.complete();
            });
        return subject.asObservable();
    }
    logout() {
        this.auth.logout();
        this.authInfo$.next(AuthService.UNKNOWN_USER);
        this.router.navigate(['/home']);

    }

}