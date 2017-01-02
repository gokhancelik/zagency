import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export class TourSchedule extends BaseModel {
    static fromJsonList(array): TourSchedule[] {
        return array.map(TourSchedule.fromJson);
    }
    static getColumns(datePipe): any {
        return {
            start: {
                title: 'start',
                type: 'Date',
                valuePrepareFunction: (value) => {
                    let raw = new Date(value);
                    let formatted = datePipe.transform(raw, 'dd.MM.yyyy');
                    return formatted;
                }
            },
            end: {
                title: 'end',
                type: 'Date',
                valuePrepareFunction: (value) => {
                    let raw = new Date(value);
                    let formatted = datePipe.transform(raw, 'dd.MM.yyyy');
                    return formatted;
                }
            },
            quota: {
                title: 'quota',
                type: 'number'
            }
        };
    }
    static fromJson({ $key, start, end, quota, tour}): TourSchedule {
        return new TourSchedule(
            $key, new Date(start), new Date(end), quota, tour);
    }
    constructor(
        id: string,
        public start: Date,
        public end: Date,
        public quota: number,
        public tour: string,
    ) {
        super();
        this.id = id;
    }
}
