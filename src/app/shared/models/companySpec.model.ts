
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class CompanySpec extends BaseModel {
    static fromJsonList(array): CompanySpec[] {
        return array.map(CompanySpec.fromJson);
    }
    static getColumns(): any {
        return {
            aboutUs: {
                title: 'about Us',
                type: 'string'
            },
            whyUs: {
                title: 'whyUs',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, aboutUs, whyUs, company,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

    }): CompanySpec {
        return new CompanySpec(
            $key, aboutUs, whyUs, company,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public aboutUs: string = null,
        public whyUs: string = null,
        public company: string = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = null,
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null
    ) {
        super(id, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
}
