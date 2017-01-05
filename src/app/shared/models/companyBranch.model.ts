
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class CompanyBranch extends BaseModel {
    static fromJsonList(array): CompanyBranch[] {
        return array.map(CompanyBranch.fromJson);
    }
    static getColumns(): any {
        return {
            companyName: {
                title: 'companyName',
                type: 'string'
            },
            address: {
                title: 'address',
                type: 'string'
            },
            latitude: {
                title: 'latitude',
                type: 'number'
            },
            longitude: {
                title: 'longitude',
                type: 'number'
            }
        };
    }
    static fromJson({ $key, address, company, companyName, latitude, longitude
        , createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

    }): CompanyBranch {
        return new CompanyBranch(
            $key, address, company, companyName, latitude, longitude
            , createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

        );
    }
    constructor(
        id: string = null,
        public address: string = null,
        public company: string = null,
        public companyName: string = null,
        public latitude: number = null,
        public longitude: number = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = null,
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null,
    ) {
        super(id, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
}
