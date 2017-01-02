import { BaseModel } from './base.model';
export class ImageSize extends BaseModel {
    static fromJsonList(array): ImageSize[] {
        console.log(array);
        return array.map(ImageSize.fromJson);
    }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            width: {
                title: 'width',
                type: 'number'
            },
            height: {
                title: 'height',
                type: 'number'
            },
            type: {
                title: 'type',
                type: 'string'
            }

        };
    }
    static fromJson({ $key, name, width, height, type}): ImageSize {
        return new ImageSize(
            $key, name, width, height, type);
    }
    constructor(
        key: string,
        public name: string,
        public width: number,
        public height: number,
        public type: string
    ) {
        super();
        this.id = key;
    }

}
