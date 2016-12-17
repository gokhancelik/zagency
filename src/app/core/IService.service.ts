import { Observable } from 'rxjs/Observable';
import { IModel } from './IModel';
/**
 * This class provides the NameList service with methods to read names and add names.
 */
export interface IService<IModel> {

    getList(): Observable<IModel[]>;
    getById(id: number): Observable<IModel>;
    add(data: IModel): Observable<IModel>;
    delete(id: number): Observable<IModel>;
    update(data: IModel, id: number): Observable<IModel>;
}

