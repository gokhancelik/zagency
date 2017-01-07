import { FirebaseListObservable } from 'angularfire2';
import { TourProgram } from './tourProgram.model';
import { ImageGalery } from './tourImageGalery';
import { Company } from './company.model';
import { TourDestination } from './tourDestination.model';
import { TourSchedule } from './tourSchedule.model';
import { TourCategory } from './tourCategory.model';
import { BaseModel } from './base.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';

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
    static fromJson({
        $key,
        name,
        urlPath,
        imageUrl,
        tourCategory,
        tourCategoryObj,
        tourScheduleObjList,
        tourDestinationObjList,
        tourProgramObjList,
        imageGaleryObjList,
        company,
        companyObj,
        rank,
        review,
        lastReviewed,
        description,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt}): Tour {
        return new Tour(
            $key,
            name,
            urlPath,
            imageUrl,
            tourCategory,
            tourCategoryObj,
            tourScheduleObjList,
            tourDestinationObjList,
            tourProgramObjList,
            imageGaleryObjList,
            company,
            companyObj,
            rank,
            review,
            new Date(lastReviewed),
            description,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
    constructor(
        key: string = null,
        public name: string = null,
        public urlPath: string = null,
        public imageUrl: string = null,
        public tourCategory: string = null,
        public tourCategoryObj: Observable<TourCategory> = null,
        public tourScheduleObjList: FirebaseListObservable<TourSchedule[]> = null,
        public tourDestinationObjList: FirebaseListObservable<TourDestination[]> = null,
        public tourProgramObjList: FirebaseListObservable<TourProgram[]> = null,
        public imageGaleryObjList: FirebaseListObservable<ImageGalery[]> = null,
        public company: string = null,
        public companyObj: Observable<Company> = null,
        public rank: number = 0,
        public review: number = 0,
        public lastReviewed: Date = new Date(),
        public description: string,
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

}
