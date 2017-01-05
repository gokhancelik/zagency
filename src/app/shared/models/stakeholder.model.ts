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
    static fromJson({ $key, publisher, publisherName, distributor, distributorName}): Stakeholder {
        return new Stakeholder(
            $key, publisher, publisherName, distributor, distributorName);
    }
    constructor(
        id: string = null,
        public publisher: string = null,
        public publisherName: string = null,
        public distributor: string = null,
        public distributorName: string = null
    ) {
        super();
        this.id = id;
    }
}
