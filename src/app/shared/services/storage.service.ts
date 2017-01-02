import { Subject } from 'rxjs/Rx';
import { FirebaseRef } from 'angularfire2';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class StorageService {
    private storageRef: any;
    constructor( @Inject(FirebaseRef) fb) {
        this.storageRef = fb.storage().ref();
    }
    upload(companyKey: string, tourKey: string, width: number, height: number, file: File) {
        let metadata = {
            contentType: 'image/jpeg'
        };
        let tourImagesRef = this.storageRef
            .child(`${companyKey}/${tourKey}/${width}x${height}/${file.name}`);
        //const subject = new Subject();
        return tourImagesRef.put(file, metadata);
            // .then(
            // val => {
            //     subject.next(val);
            //     subject.complete();

            // },
            // err => {
            //     subject.error(err);
            //     subject.complete();
            // }
            // );
        //return subject.asObservable();
    }

}
