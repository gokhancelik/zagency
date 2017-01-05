import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class TourSchedulePrice extends BaseModel {
    static fromJsonList(array): TourSchedulePrice[] {
        return array.map(TourSchedulePrice.fromJson);
    }
    static getColumns(): any {
        return {
            tourName: {
                title: 'tourName',
                type: 'number'
            },
            price: {
                title: 'price',
                type: 'number'
            },
            discount: {
                title: 'discount',
                type: 'number'
            },
            priceTypeName: {
                title: 'price Type',
                type: 'string'
            },
            currencyName: {
                title: 'currency',
                type: 'string'
            },
            currencySymbol: {
                title: 'currency Symbol',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, price, discount, priceType, priceTypeName,
        currency, currencyName, currencySymbol, tourSchedule,tourName,tourUrlPath}): TourSchedulePrice {
        return new TourSchedulePrice(
            $key, price, discount, priceType, priceTypeName,
            currency, currencyName, currencySymbol, tourSchedule,tourName,tourUrlPath);
    }
    constructor(
        id: string = null,
        public price: number = 0,
        public discount: number = 0,
        public priceType: string = null,
        public priceTypeName: string = null,
        public currency: string = null,
        public currencyName: string = null,
        public currencySymbol: string = null,
        public tourSchedule: string = null,
        public tourName:string=null,
        public tourUrlPath:string=null,

    ) {
        super();
        this.id = id;
    }
}
