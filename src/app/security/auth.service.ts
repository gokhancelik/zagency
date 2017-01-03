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
        return this.fromFirebaseAuthPromise(this.auth.login({ email, password }
            ,
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }));
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
    getUserInfo(): Observable<CurrentUser> {
        let auth$ = this.auth.take(1);
        let user$ = auth$.switchMap(value =>
            this.fDb.list('users', {
                query: { orderByChild: 'email', equalTo: value.auth.email, limitToFirst: 1 }
            })).map(User.fromJsonList).flatMap(list => list).first();
        let userWithRole$ =
            user$.switchMap(user =>
                this.fDb.list('roles', {
                    query: { orderByKey: true, equalTo: user ? user.role : "", limitToFirst: 1 }
                })
                    .flatMap(list => list).first()
                    .map((role) => ({ role, user }))
            );
        return userWithRole$.map(CurrentUser.fromJson);
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