import { Tour } from './tour.model';
import { Observable } from 'rxjs/Observable';
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class ImageGalery extends BaseModel {
    static fromJsonList(array): ImageGalery[] {
        return array.map(ImageGalery.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            tourName: {
                title: 'tour Name',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, name, tour, tourObj, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt}): ImageGalery {
        return new ImageGalery(
            $key, name, tour, tourObj, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
    constructor(
        key: string = null,
        public name: string = null,
        public tour: string = null,
        public tourObj: Observable<Tour> = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = new Date(),
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null
    ) {
        super(key, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
}

