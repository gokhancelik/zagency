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
        tourScheduleStart,
        tourScheduleEnd,
        tourName,
        publisher,
        publisherName,
        distributor,
        distributorName,
        quota,
        percent,
        soldCount,
        active,
        prices,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

    }): PublishingTour {
        return new PublishingTour($key,
            tourSchedule,
            new Date(tourScheduleStart),
            new Date(tourScheduleEnd),
            tourName,
            publisher,
            publisherName,
            distributor,
            distributorName,
            quota,
            percent,
            soldCount,
            active,
            TourSchedulePrice.fromJsonList(prices),
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public tourSchedule: string = null,
        public tourScheduleStart: Date = new Date(),
        public tourScheduleEnd: Date = new Date(),
        public tourName: string = null,
        public publisher: string = null,
        public publisherName: string = null,
        public distributor: string = null,
        public distributorName: string = null,
        public quota: number = 0,
        public percent: number = 0,
        public soldCount: number = 0,
        public active: boolean = false,
        public prices: TourSchedulePrice[] = null,
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
