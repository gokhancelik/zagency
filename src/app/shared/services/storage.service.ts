import { Subject } from 'rxjs/Rx';
import { FirebaseRef } from 'angularfire2';
import { Injectable, Inject } from '@angular/core';

@Injectable()
export class StorageService {
    private storageRef: any;
    constructor( @Inject(FirebaseRef) fb) {
        this.storageRef = fb.storage().ref();
    }
    upload(companyKey: string, tourKey: string, width: number, height: number, fileName: string, file: File) {
        let metadata = {
            contentType: 'image/jpeg'
        };
        let tourImagesRef = this.storageRef
            .child(`${companyKey}/${tourKey}/${width}x${height}/${fileName}`);
        return tourImagesRef.put(file, metadata);
    }
    getDownloadUrl(companyKey: string, tourKey: string, width: number,
        height: number, name: string) {
        let tourImagesRef$ = this.storageRef
            .child(`${companyKey}/${tourKey}/${width}x${height}/${name}`).getDownloadURL();
        return tourImagesRef$;
    }
}
