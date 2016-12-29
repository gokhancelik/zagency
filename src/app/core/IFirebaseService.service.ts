import { AngularFire, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';
import { IModel } from './IModel';
/**
 * This class provides the NameList service with methods to read names and add names.
 */
export interface IService<IModel> {

    getList(): FirebaseListObservable<IModel[]>;
    getByKey(key: string): FirebaseObjectObservable<IModel>;
    add(data: IModel): FirebaseObjectObservable<IModel>;
    delete(key: string): FirebaseObjectObservable<IModel>;
    update(data: IModel, key: string): FirebaseObjectObservable<IModel>;
}

