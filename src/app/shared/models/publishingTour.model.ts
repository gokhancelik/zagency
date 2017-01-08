import { Company } from './company.model';
import { Tour } from './tour.model';
import { TourSchedule } from './tourSchedule.model';
import { Observable } from 'rxjs/Rx';
import { TourSchedulePrice } from './tourSchedulePrice.model';
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class PublishingTour extends BaseModel {
    static fromJsonList(array): PublishingTour[] {
        return array.map(PublishingTour.fromJson);
    }
    static getColumns(): any {
        return {
            tourScheduleStart: {
                title: 'tour Schedule Start',
                type: 'string'
            },
            tourScheduleEnd: {
                title: 'tour Schedule End',
                type: 'string'
            },
            tourName: {
                title: 'tour Name',
                type: 'string'
            },
            publisherName: {
                title: 'Publisher',
                type: 'string'
            },
            distributorName: {
                title: 'distributor',
                type: 'string'
            },
            quota: {
                title: 'quota',
                type: 'number'
            },
            active: {
                title: 'active',
                type: 'boolean'
            }
        };
    }
    static fromJson({ $key,
        tourSchedule,
        tourScheduleObj,
        tourObj,
        publisher,
        publisherObj,
        distributor,
        distributorObj,
        quota,
        percent,
        soldCount,
        active,
        priceObjList,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

    }): PublishingTour {
        return new PublishingTour($key,
            tourSchedule,
            tourScheduleObj,
            tourObj,
            publisher,
            publisherObj,
            distributor,
            distributorObj,
            quota,
            percent,
            soldCount,
            active,
            priceObjList,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public tourSchedule: string = null,
        public tourScheduleObj: Observable<TourSchedule> = null,
        public tourObj: Observable<Tour> = null,
        public publisher: string = null,
        public publisherObj: Observable<Company> = null,
        public distributor: string = null,
        public distributorObj: Observable<Company> = null,
        public quota: number = 0,
        public percent: number = 0,
        public soldCount: number = 0,
        public active: boolean = false,
        public priceObjList: Observable<TourSchedulePrice[]> = null,
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
