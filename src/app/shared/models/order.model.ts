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
                title: 'Schedule Start',
                type: 'string'
            },
            tourScheduleEnd: {
                title: 'Schedule End',
                type: 'string'
            },
            tourName: {
                title: 'tourName',
                type: 'string'
            },
            publisherName: {
                title: 'publisherName',
                type: 'string'
            },
            distributorName: {
                title: 'distributorName',
                type: 'string'
            },
            percent: {
                title: 'percent',
                type: 'number'
            },
            reservedBy: {
                title: 'reservedBy',
                type: 'string'
            },
            soldByDistributor: {
                title: 'soldByDistributor',
                type: 'boolean'
            },
            isSold: {
                title: 'isSold',
                type: 'boolean'
            },
            price: {
                title: 'price',
                type: 'number'
            },
            priceTypeName: {
                title: 'priceTypeName',
                type: 'string'
            },
            currencyName: {
                title: 'currencyName',
                type: 'string'
            },
            customerName: {
                title: 'customerName',
                type: 'string'
            },
            customerPhone: {
                title: 'customerPhone',
                type: 'string'
            },
            customerEmail: {
                title: 'customerEmail',
                type: 'string'
            },
            customerAddress: {
                title: 'customerAddress',
                type: 'string'
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
        percent,
        reservedBy,
        soldByDistributor,
        isSold,
        price,
        priceTypeName,
        currencyName,
        customer,
        customerName,
        customerPhone,
        customerEmail,
        customerAddress
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
            percent,
            reservedBy,
            soldByDistributor,
            isSold,
            price,
            priceTypeName,
            currencyName,
            customer,
            customerName,
            customerPhone,
            customerEmail,
            customerAddress
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
        public reservedBy: string = null,
        public soldByDistributor: boolean = false,
        public isSold: boolean = false,
        public price: number = 0,
        public priceTypeName: string = null,
        public currencyName: string = null,
        public customer: string = null,
        public customerName: string = null,
        public customerPhone: string = null,
        public customerEmail: string = null,
        public customerAddress: string = null,
    ) {
        super();
        this.id = id;
    }
}
