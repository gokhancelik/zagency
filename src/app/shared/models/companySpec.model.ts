
import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export class CompanySpec extends BaseModel {
    static fromJsonList(array): CompanySpec[] {
        return array.map(CompanySpec.fromJson);
    }
    static getColumns(datePipe): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            description: {
                title: 'description',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, name,description, company}): CompanySpec {
        return new CompanySpec(
            $key, name, description, company);
    }
    constructor(
        id: string=null,
        public name: string=null,
        public description: string=null,
        public company: string=null,
    ) {
        super();
        this.id = id;
    }
}
