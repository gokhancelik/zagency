
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
    static fromJson({ $key, aboutUs, whyUs, company}): CompanySpec {
        return new CompanySpec(
            $key, aboutUs, whyUs, company);
    }
    constructor(
        id: string = null,
        public aboutUs: string = null,
        public whyUs: string = null,
        public company: string = null
    ) {
        super();
        this.id = id;
    }
}
