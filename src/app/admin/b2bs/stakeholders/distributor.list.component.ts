import { StakeholderService } from './../../../shared/services/stakeholder.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ListComponent } from '../../core/index';
@Component({
    selector: 'distributor-list',
    templateUrl: 'distributor.list.component.html'
})
export class DistributorListComponent implements OnInit {
    constructor(private service: StakeholderService) {
    }
    ngOnInit() {

    }
}
