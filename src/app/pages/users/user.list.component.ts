import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { User } from '../../shared/models';
import { UserService } from '../../shared/services';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { UserEditComponent, UserAddComponent } from './index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'user-list',
    templateUrl: 'user.list.component.html'
})
export class UserListComponent extends ListComponent<User> {
    @ViewChild('addModal') addModal: UserAddComponent;
    @ViewChild('editModal') editModal: UserEditComponent;
    title: string = 'Users';
    constructor(private _service: UserService) {
        super(_service);
        this.setColumns(User.getColumns());
    }
}

