import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export class PublishingTour extends BaseModel {
    static fromJsonList(array): PublishingTour[] {
        return array.map(PublishingTour.fromJson);
    }
    static getColumns(datePipe): any {
        return {
              publisher_name: {
                title: 'publisher_name',
                quota: 'string'
            },
             distributer_name: {
                title: 'distributer_name',
                quota: 'string'
            },
            ratio: {
                title: 'ratio',
                type: 'number'
            },
            quota: {
                title: 'ratio',
                quota: 'number'
            },
              active: {
                title: 'active',
                quota: 'boolean'
            },
            create: {
                title: 'create',
                type: 'Date',
                valuePrepareFunction: (value) => {
                    let raw = new Date(value);
                    let formatted = datePipe.transform(raw, 'dd.MM.yyyy');
                    return formatted;
                }
            }
        };
    }
    static fromJson({ $key, publisher_name, distributer_name, ratio, quota,active,create,tourschedule}): PublishingTour {
        return new PublishingTour(
            $key, publisher_name,distributer_name,ratio,quota,active,create, tourschedule);
    }
    constructor(
        id: string=null,
        public publisher_name:string=null,
        public distributer_name:string=null,
        public create: Date=new Date(),
        public quota: number=0,
        public ratio: number=0,
        public active:boolean=false,
        public tourschedule: string=null,
    ) {
        super();
        this.id = id;
    }
}
