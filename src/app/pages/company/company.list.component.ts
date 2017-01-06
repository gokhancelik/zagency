import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { CompanyService } from '../../shared/services/index';
import { Company } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';
import { CompanyEditComponent, CompanyAddComponent } from './index';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'company-list',
    templateUrl: 'company.list.component.html'
})
export class CompanyListComponent implements OnInit {
    @ViewChild('addModal') addModal: CompanyAddComponent;
    @ViewChild('editModal') editModal: CompanyEditComponent;
    title: string = 'Companies';
    source: Observable<Company[]>;
    constructor(private _service: CompanyService, private router: Router) {
        this.source = _service.getAll();
    }
    ngOnInit() {

    }
    onCreate(event): void {
        this.router.navigate(['pages/companies/newCompany']);
    }
    onEdit(event): void {
        let tt: Company = event.data as Company;
        this.router.navigate(['pages/companies/edit/' + tt.id]);
    }
}

