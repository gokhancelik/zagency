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
            tourName: {
                title: 'tourName',
                type: 'string'
            },
            quota: {
                title: 'quota',
                type: 'number'
            }
        };
    }
    static fromJson({ $key, start, end, quota, tour, tourName, tourUrlPath, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt}): TourSchedule {
        return new TourSchedule(
            $key, new Date(start), new Date(end), quota, tour, tourName, tourUrlPath, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
    constructor(
        key: string = null,
        public start: Date = new Date(),
        public end: Date = new Date(),
        public quota: number = 0,
        public tour: string = null,
        public tourName: string = null,
        public tourUrlPath: string = null,
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

