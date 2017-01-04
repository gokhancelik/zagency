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
            distrubutor: {
                title: 'distributor',
                type: 'string'
            },
            distrubutor_name: {
                title: 'distributor',
                type: 'string'
            },
        };
    }
    get id() {
        return this.$key;
    }
    static fromJson({ $key, publisher, publisher_name, distributor, distributor_name}): B2B {
        return new B2B(
            $key, publisher, publisher_name, distributor, distributor_name);
    }
    constructor(
        public $key: string = null,
        public publisher: string = null,
        public publisher_name: string = null,
        public distributor: string = null,
        public distributor_name: string = null
    ) {
        super();
    }
}
