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
    static fromJson({ $key, name, description, company,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

    }): CompanyServiceModel {
        return new CompanyServiceModel(
            $key, name, description, company,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public name: string = null,
        public description: string = null,
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
