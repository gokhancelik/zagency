import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from 'angularfire2';
import { Company } from '../models';
import { BaseFirebaseService } from './base.firebase.service';
@Injectable()
export class CompanyService extends BaseFirebaseService<Company> {
    constructor(private _af: AngularFireDatabase) {
        super(_af, 'companies');
    }
    fromJson(obj) {
        return Company.fromJson(obj);
    }
    fromJsonList(array) {
        return Company.fromJsonList(array);
    }
}
