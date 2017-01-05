
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class TourDestination extends BaseModel {
    static fromJsonList(array): TourDestination[] {
        return array.map(TourDestination.fromJson);
    }
    static getColumns(): any {
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
              },
              tourName: {
                title: 'tour Name',
                type: 'string'
              }
        };
    }
    static fromJson({ $key, name,latitude,longitude, tour,tourName, tourUrlPath}): TourDestination {
        return new TourDestination(
            $key, name, latitude, longitude,tour,tourName, tourUrlPath);
    }
    constructor(
        id: string=null,
        public name: string=null,
        public latitude: number=0,
        public longitude: number=0,
        public tour: string=null,
        public tourName:string=null,
        public tourUrlPath:string=null
    ) {
        super();
        this.id = id;
    }
}

