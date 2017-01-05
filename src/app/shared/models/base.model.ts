import { IModel } from '../../core/IModel';
export abstract class BaseModel implements IModel {
    id: any;
    public createdAt: Date;
    public createdBy: any;
    public modifiedAt: Date;
    public modifiedBy: any;
    public isDeleted: boolean;
    public deletedBy: any;
    public deletedAt: Date;
}
