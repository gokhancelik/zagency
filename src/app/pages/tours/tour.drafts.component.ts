import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TourService } from '../../shared/services/tour.service';
import { Tour } from '../../shared/models';
@Component({
    selector: 'tour-drafts',
    templateUrl: 'tour.list.component.html'
})
export class DraftsComponent implements OnInit {
    list: Array<Tour>;
    errorMessage: string;
    loadDrafts: boolean;
    constructor(private tourService: TourService, private router: Router) { }
    ngOnInit() {
        this.tourService.getDraftTours().subscribe(
            data => this.list = data,
            error => this.errorMessage = <any>error);
    }
    editTour(id: number) {
        // Pass along the hero id if available
        // so that the HeroList component can select that hero.
        this.router.navigate(['tours/edit/' + id]);
    }

}
