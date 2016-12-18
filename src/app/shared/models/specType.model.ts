import { IModel } from '../../core/IModel';
export class SpecType implements IModel {
    id: number;
    name: string;
    code: string;
    group: string;
    specTypeId: number;
    constructor(data = null) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.group = data.group;
            this.code = data.code;
            this.specTypeId = data.specTypeId;
        }
        else {
            this.id = 0;
            this.name = '';
            this.group = '';
            this.code = '';
            this.specTypeId = 0;
        }
    }
}
