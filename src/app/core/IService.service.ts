import { Observable } from 'rxjs/Observable';
import { IModel } from './IModel';
/**
 * This class provides the NameList service with methods to read names and add names.
 */
export interface IService<IModel> {

    getAll(): Observable<IModel[]>;
    getByKey(key: any): Observable<IModel>;
    add(data: IModel);
    delete(key: any);
    update(key: any, data: IModel);
}

