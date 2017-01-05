import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
    title: string = 'Tours';
    source: Observable<Tour[]>;
    constructor(private tourService: TourService, private router: Router) {
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
    onCreate(event): void {
        this.router.navigate(['pages/tours/newTour']);
    }
    onEdit(event): void {
        let tt: Tour = event.data as Tour;
        this.router.navigate(['pages/tours/edit/' + tt.id]);
    }
}
