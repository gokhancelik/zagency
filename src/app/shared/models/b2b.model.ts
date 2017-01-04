import { BaseModel } from './base.model';
export class B2B extends BaseModel {
    static fromJsonList(array): B2B[] {
        return array.map(B2B.fromJson);
    }
    static getColumns(): any {
        return {
            publisher: {
                title: 'publisher',
                type: 'string'
            },
            publisher_name: {
                title: 'publisher',
                type: 'string'
            },
            distributor: {
                title: 'distributor',
                type: 'string'
            },
            distributor_name: {
                title: 'distributor',
                type: 'string'
            },
        };
    }
    static fromJson({ $key, publisher, publisher_name, distributor, distributor_name}): B2B {
        return new B2B(
            $key, publisher, publisher_name, distributor, distributor_name);
    }
    constructor(
        id: string = null,
        public publisher: string = null,
        public publisher_name: string = null,
        public distributor: string = null,
        public distributor_name: string = null
    ) {
        super();
        this.id = id;
    }
}
