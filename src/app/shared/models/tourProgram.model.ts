
import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export class TourProgram extends BaseModel {
    static fromJsonList(array): TourProgram[] {
        return array.map(TourProgram.fromJson);
    }
    static getColumns(datePipe): any {
        return {
            description: {
                title: 'description',
                type: 'string'
            },
            day: {
                title: 'day',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, description,day, tour}): TourProgram {
        return new TourProgram(
            $key, description, day, tour);
    }
    constructor(
        id: string,
        public description: string,
        public day: string,
        public tour: string,
    ) {
        super();
        this.id = id;
    }
}
