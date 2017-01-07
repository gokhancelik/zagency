import { CurrencyType } from './currencyType.model';
import { PriceType } from './priceType.model';
import { TourSchedule } from './tourSchedule.model';
import { Tour } from './tour.model';
import { Observable } from 'rxjs/Observable';
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
    static fromJson({ $key, price, discount, priceType, priceTypeObj,
        currency, currencyTypeObj, tourSchedule, tourScheduleObj, tour, tourObj}): TourSchedulePrice {
        return new TourSchedulePrice(
            $key, price, discount, priceType, priceTypeObj,
        currency, currencyTypeObj, tourSchedule, tourScheduleObj, tour, tourObj);
    }
    constructor(
        id: string = null,
        public price: number = 0,
        public discount: number = 0,
        public priceType: string = null,
        public priceTypeObj: Observable<PriceType> = null,
        public currency: string = null,
        public currencyTypeObj: Observable<CurrencyType> = null,
        public tourSchedule: string = null,
        public tourScheduleObj: Observable<TourSchedule> = null,
        public tour: string = null,
        public tourObj: Observable<Tour> = null,

    ) {
        super();
        this.id = id;
    }
}
