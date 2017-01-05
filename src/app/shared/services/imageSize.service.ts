import { AuthService } from './../../security/auth.service';
import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireAuth, FirebaseRef } from 'angularfire2';
import { ImageSize } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
import { Observable, Subject } from 'rxjs/Rx';
@Injectable()
export class ImageSizeService extends BaseFirebaseService<ImageSize> {
    sdkDb: any;
    constructor(private afAuth: AngularFireAuth,
        private _af: AngularFireDatabase, private _authService: AuthService,
        @Inject(FirebaseRef) fb) {
        super(_af, 'imageSizes', fb, _authService);
        this.sdkDb = fb.database().ref();
    }
    fromJson(obj) {
        return ImageSize.fromJson(obj);
    }
    fromJsonList(array) {
        return ImageSize.fromJsonList(array);
    }
}
