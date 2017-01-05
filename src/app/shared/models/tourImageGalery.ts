
import { BaseModel } from './base.model';
import { Injectable, Inject } from '@angular/core';

export class ImageGalery extends BaseModel {
    static fromJsonList(array): ImageGalery[] {
        return array.map(ImageGalery.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
              tourName: {
                title: 'tour Name',
                type: 'string'
              }
        };
    }
    static fromJson({ $key, name,tour,tourName}): ImageGalery {
        return new ImageGalery(
            $key, name,tour,tourName);
    }
    constructor(
        key: string=null,
        public name: string=null,
        public tour: string=null,
        public tourName:string=null,

    ) {
        super();
        this.id = key;
    }
}

