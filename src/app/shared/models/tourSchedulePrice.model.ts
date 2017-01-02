import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export class TourSchedulePrice extends BaseModel {
    static fromJsonList(array): TourSchedulePrice[] {
        return array.map(TourSchedulePrice.fromJson);
    }
    static getColumns(datePipe): any {
        return {
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
        currency, currencyName, currencySymbol}): TourSchedulePrice {
        return new TourSchedulePrice(
            $key, price, discount, priceType, priceTypeName,
            currency, currencyName, currencySymbol);
    }
    constructor(
        id: string,
        public price: number,
        public discount: number,
        public priceType: string,
        public priceTypeName: string,
        public currency: string,
        public currencyName: string,
        public currencySymbol: string,
    ) {
        super();
        this.id = id;
    }
}
