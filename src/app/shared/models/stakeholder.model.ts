import { Company } from './company.model';
import { Observable } from 'rxjs/Rx';
import { BaseModel } from './base.model';
export class Stakeholder extends BaseModel {
    static fromJsonList(array): Stakeholder[] {
        return array.map(Stakeholder.fromJson);
    }
    static getColumns(): any {
        return {
            publisher: {
                title: 'publisher',
                type: 'string'
            },
            publisherName: {
                title: 'publisher',
                type: 'string'
            },
            distributor: {
                title: 'distributor',
                type: 'string'
            },
            distributorName: {
                title: 'distributor',
                type: 'string'
            },
        };
    }
    static fromJson({ $key, publisher, publisherObj, distributor, distributorObj,
        createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
    }): Stakeholder {
        return new Stakeholder(
            $key, publisher, publisherObj, distributor, distributorObj,
            createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt
        );
    }
    constructor(
        id: string = null,
        public publisher: string = null,
        public publisherObj: Observable<Company> = null,
        public distributor: string = null,
        public distributorObj: Observable<Company> = null,
        createdAt: Date = null,
        createdBy: string = null,
        modifiedAt: Date = null,
        modifiedBy: string = null,
        isDeleted: boolean = false,
        deletedBy: string = null,
        deletedAt: Date = null
    ) {
        super(id, createdAt, createdBy, modifiedAt, modifiedBy, isDeleted, deletedBy, deletedAt);
    }
}
