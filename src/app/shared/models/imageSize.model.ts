import { BaseModel } from './base.model';
export class ImageSize extends BaseModel {
    static fromJsonList(array): ImageSize[] {
        console.log(array);
        return array.map(ImageSize.fromJson);
    }
    // get ratio(): number {
    //     return this.height ? this.width / this.height : 0;
    // }
    static getColumns(): any {
        return {
            name: {
                title: 'name',
                type: 'string'
            },
            width: {
                title: 'image Width',
                type: 'number'
            },
            height: {
                title: 'image Height',
                type: 'number'
            },
            // ratio: {
            //     title: 'ratio',
            //     type: 'number'
            // },
            type: {
                title: 'location',
                type: 'string'
            }

        };
    }
    static fromJson({ $key, name, width, height, type}): ImageSize {
        return new ImageSize(
            $key, name, width, height, type);
    }
    constructor(
        key: string = null,
        public name: string = null,
        public width: number = null,
        public height: number = null,
        public type: string = null
    ) {
        super();
        this.id = key;
    }

}
