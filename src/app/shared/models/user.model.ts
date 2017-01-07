import { Injectable } from '@angular/core';
import { CompanyService } from './../services/company.service';
import { Role } from './role.model';
import { Company } from './company.model';
import { Observable } from 'rxjs/Observable';
import { BaseModel } from './base.model';
export class User extends BaseModel {
    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            roleName: {
                title: 'role Name',
                type: 'string'
            },
            email: {
                title: 'email',
                type: 'string'
            },
            userName: {
                title: 'userName',
                type: 'string'
            },
            companyName: {
                title: 'company Name',
                type: 'string'
            },
            phone: {
                title: 'phone',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, name, phone, userName, email, company, role, companyObj, roleObj, userObj }): User {
        return new User(
            $key, name, phone, userName, email, company, role, companyObj, roleObj, userObj);
    }
    constructor(
        id: string = null,
        public name: string = null,
        public phone: string = null,
        public userName: string = null,
        public email: string = null,
        public company: string = null,
        public role: string = null,
        public companyObj: Observable<Company> = null,
        public roleObj: Observable<Role> = null,
        public userObj: Observable<any> = null,
        ) {
        super();
        this.id = id;

    }

}
