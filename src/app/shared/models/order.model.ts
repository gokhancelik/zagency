import { Tour } from './tour.model';
import { TourSchedule } from './tourSchedule.model';
import { Company } from './company.model';
import { CurrencyType } from './currencyType.model';
import { PriceType } from './priceType.model';
import { Customer } from './customer.model';
import { Observable } from 'rxjs/Rx';
import { TourSchedulePrice } from './tourSchedulePrice.model';
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class Order extends BaseModel {
    static fromJsonList(array): Order[] {
        return array.map(Order.fromJson);
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
        tourScheduleObj,
        tour,
        tourObj,
        publisher,
        publisherObj,
        distributor,
        distributorObj,
        percent,
        reservedBy,
        soldByDistributor,
        isSold,
        price,
        priceType,
        priceTypeObj,
        currency,
        currencyObj,
        customer,
        cutomerObj,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

    }): Order {
        return new Order($key,
            tourSchedule,
            tourScheduleObj,
            tour,
            tourObj,
            publisher,
            publisherObj,
            distributor,
            distributorObj,
            percent,
            reservedBy,
            soldByDistributor,
            isSold,
            price,
            priceType,
            priceTypeObj,
            currency,
            currencyObj,
            customer,
            cutomerObj,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt

        );
    }
    constructor(
        id: string = null,
        public tourSchedule: string = null,
        public tourScheduleObj: Observable<TourSchedule> = null,
        public tour: string = null,
        public tourObj: Observable<Tour> = null,
        public publisher: string = null,
        public publisherObj: Observable<Company> = null,
        public distributor: string = null,
        public distributorObj: Observable<Company> = null,
        public quota: number = 0,
        public percent: number = 0,
        public reservedBy: string = null,
        public soldByDistributor: boolean = false,
        public isSold: boolean = false,
        public price: number = 0,
        public priceType: string = null,
        public priceTypeObj: Observable<PriceType> = null,
        public currency: string = null,
        public currencyObj: Observable<CurrencyType> = null,
        public customer: string = null,
        public cutomerObj: Observable<Customer>,
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
