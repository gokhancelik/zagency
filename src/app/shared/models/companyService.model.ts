import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class CompanyServiceModel extends BaseModel {
    static fromJsonList(array): CompanyServiceModel[] {
        return array.map(CompanyServiceModel.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            description: {
                title: 'description',
                type: 'number'
            }
        };
    }
    static fromJson({ $key, name, description, company}): CompanyServiceModel {
        return new CompanyServiceModel(
            $key, name, description, company);
    }
    constructor(
        id: string = null,
        public name: string = null,
        public description: string = null,
        public company: string = null
    ) {
        super();
        this.id = id;
    }
}
