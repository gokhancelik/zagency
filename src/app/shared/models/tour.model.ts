import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
export class Tour extends BaseModel {
    static fromJsonList(array): Tour[] {
        console.log(array);
        return array.map(Tour.fromJson);
    }
    static getColumns(datePipe): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            urlPath: {
                title: 'url Path',
                type: 'string'
            },
            imageUrl: {
                title: 'image Url',
                type: 'string'
            },
            tourCategory: {
                title: 'tour Category',
                type: 'string'
            },
            tourCategoryName: {
                title: 'tour Category Name',
                type: 'string'
            },
            company: {
                title: 'company key',
                type: 'string'
            },
            companyName: {
                title: 'company Name',
                type: 'string'
            },
            rank: {
                title: 'Rank',
                type: 'number'
            },
            review: {
                title: 'Review',
                type: 'number'
            },
            lastReviewed: {
                title: 'Review Date',
                type: 'Date',
                valuePrepareFunction: (value) => {
                    let raw = new Date(value);
                    let formatted = datePipe.transform(raw, 'dd.MM.yyyy');
                    return formatted;
                }
            },
            description: {
                title: 'Description',
                type: 'string'
            }
        };
    }
    static fromJson({ $key, name, urlPath, imageUrl, tourCategory,tourCategoryName, company,companyName,rank,review,lastReviewed, description}): Tour {
        return new Tour(
            $key, name, urlPath, imageUrl, tourCategory, tourCategoryName,company,companyName,rank,review,new Date(lastReviewed), description);
    }
    constructor(
        key: string=null,
        public name: string=null,
        public urlPath: string=null,
        public imageUrl: string=null,
        public tourCategory: string=null,
        public tourCategoryName:string=null,
        public company: string=null,
        public companyName: string=null,
        public rank:number=0,
        public review:number=0,
        public lastReviewed:Date=new Date(),
        public description: string,
    ) {
        super();
        this.id = key;
    }

}
