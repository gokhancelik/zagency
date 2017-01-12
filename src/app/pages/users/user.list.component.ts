import { ListComponent } from './../../core/list.component';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { User } from '../../shared/models';
import { UserService, CompanyService } from '../../shared/services';
import { LocalDataSource } from 'ng2-smart-table';
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
    userList: Observable<User[]>;
    title: string = 'Users';
    constructor(private _service: UserService, private compService: CompanyService
        , private router: Router) {
        super(_service);
        this.setColumns(User.getColumns());
        this.userList = _service.getAll();
    }
    // onEdit(event): void {
    //     let tt: User = event.data as User;
    //     this.router.navigateByUrl('pages/users(anotherList:playlist)');
    // }
}

