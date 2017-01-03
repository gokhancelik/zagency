
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class CompanyBranch extends BaseModel {
    static fromJsonList(array): CompanyBranch[] {
        return array.map(CompanyBranch.fromJson);
    }
    static getColumns(): any {
        return {
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
    static fromJson({ $key, address, latitude, longitude}): CompanyBranch {
        return new CompanyBranch(
            $key, address, latitude, longitude);
    }
    constructor(
        id: string = null,
        public address: string = null,
        public latitude: number = null,
        public longitude: number = null,
    ) {
        super();
        this.id = id;
    }
}
