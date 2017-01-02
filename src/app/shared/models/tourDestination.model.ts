
import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

export class TourDestination extends BaseModel {
    static fromJsonList(array): TourDestination[] {
        return array.map(TourDestination.fromJson);
    }
    static getColumns(datePipe): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
              latitude: {
                title: 'latitude',
                type: 'number'
            },
              longitude: {
                title: 'longitude',
                type: 'number'
              }
        };
    }
    static fromJson({ $key, name,latitude,longitude, tour}): TourDestination {
        return new TourDestination(
            $key, name, latitude, longitude,tour);
    }
    constructor(
        id: string=null,
        public name: string=null,
        public latitude: number=0,
        public longitude: number=0,
        public tour: string=null,
    ) {
        super();
        this.id = id;
    }
}

