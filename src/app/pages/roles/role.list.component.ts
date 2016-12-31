import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Role } from '../../shared/models';
import { RoleService } from '../../shared/services';
import { ListComponent } from '../../core/index';
import { RoleEditComponent, RoleAddComponent } from './index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'role-list',
    templateUrl: 'role.list.component.html'
})
export class RoleListComponent extends ListComponent<Role> {
    @ViewChild('addModal') addModal: RoleAddComponent;
    @ViewChild('editModal') editModal: RoleEditComponent;
    title: string = 'Roles';
    constructor(private _service: RoleService) {
        super(_service);
        this.setColumns(Role.getColumns());
    }
}

