import { CompanyService } from './../../shared/services/company.service';
import { AuthService } from './../../security/auth.service';
import { PublishingTourAddComponent } from './../b2bs/publishingTours/publishingTour.add.component';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TourService } from '../../shared/services/tour.service';
import { Tour } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
import { ListComponent } from '../../core/index';

@Component({
    selector: 'tour-list',
    templateUrl: 'tour.list.component.html'
})
export class TourListComponent implements OnInit {
    @ViewChild('publishModal') publishModal: PublishingTourAddComponent;

    title: string = 'Tours';
    source: Observable<Tour[]>;
    constructor(private tourService: TourService,
        private router: Router, private authService: AuthService,
        private companyService: CompanyService) {
        this.source = tourService.getAll();
    }
    ngOnInit() {
    }
    // getList() {
    //     this.loading = true;
    //     this.tourService.getAll().subscribe(
    //         data => {
    //             this.loading = false;
    //             this.source.load(data);
    //         },
    //         error => this.errorMessage = <any>error);
    // }

    // onDelete(event): void {
    //     if (window.confirm('Are you sure you want to delete?')) {
    //         let tt: Tour = event.data as Tour;
    //         this.tourService.delete(tt.productBaseId).subscribe(
    //             data => this.getList(),
    //             error => alert(error));
    //     } else {

    //     }
    // };
    onPublish(event) {
        let that = this;
        this.authService.getUserInfo().subscribe(auth => {
            that.companyService.getByKey(auth.user.company).subscribe(
                c => {
                    that.publishModal.setTourSchedule(event.data);
                    that.publishModal.setPublisher(c);
                    that.publishModal.open();
                }
            );
        });
    }
    onCreate(event): void {
        this.router.navigate(['admin/tours/newTour']);
    }
    onEdit(event): void {
        let tt: Tour = event.data as Tour;
        this.router.navigate(['admin/tours/edit/' + tt.id]);
    }
}
