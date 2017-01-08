import { CompanyService } from './../../../shared/services/company.service';
import { TourSchedule } from './../../../shared/models/tourSchedule.model';
import { Company } from './../../../shared/models/company.model';
import { StakeholderService } from './../../../shared/services/stakeholder.service';
import { Stakeholder } from './../../../shared/models/stakeholder.model';
import { PUBLISHINGTOUR_FORM_MODEL } from './publishing-form.model';
import { PublishingTourService } from './../../../shared/services/publishingTour.service';
import { PublishingTour } from './../../../shared/models/publishingTour.model';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter, Input
} from '@angular/core';
import { USER_FORM_MODEL } from './user-form.model';
import { ModalDirective } from 'ng2-bootstrap';
import { AddComponent } from '../../../core/add.component';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
import { FormGroup } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'publishingTour-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../../core/form.component.html'

})
export class PublishingTourAddComponent extends AddComponent<PublishingTour>  {
    _af: AngularFire;
    @Input() publisher: Company;
    @Input() tourSchedule: TourSchedule;
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    constructor(dynamicFormService: DynamicFormService,
        private _service: PublishingTourService,
        private stakeHolderService: StakeholderService,
        private companyService: CompanyService) {
        super(PublishingTour, dynamicFormService, _service, PUBLISHINGTOUR_FORM_MODEL);

    }
    setTourSchedule(tourSchedule: TourSchedule) {
        this.tourSchedule = tourSchedule;
    }
    save(form) {
        let that = this;
        if (form) {
            if (form.value) {
                if (!form.valid) {
                    return;
                }
                if (!that.model) {
                    that.model = new PublishingTour();
                }
                Object.keys(form.value).forEach(fv => {
                    that.model[fv] = form.value[fv];
                });
                that.model.publisher = that.publisher.id;
                that.model.active = true;
                that.model.tourSchedule = that.tourSchedule.$key;//TODO: map et
                that.model.tour=that.tourSchedule.tour;
                that._service.add(that.model);
                //if (that.onSaved) that.onSaved.emit(d);
                if (that.formModal) that.formModal.hide();
            }
        }
    }
    setPublisher(publisher: Company) {
        let that = this;
        this.publisher = publisher;
        PUBLISHINGTOUR_FORM_MODEL.forEach(value => {
            if (value.id === 'distributor') {
                let select = value as DynamicSelectModel<any>;
                this.stakeHolderService.getDistibutors(this.publisher.id).take(1)
                    .subscribe(data => {
                        select.options = [];
                        data.forEach(sh => {
                            that.companyService.getByKey(sh.distributor).subscribe(
                                c => {
                                    let s = new DynamicFormOption<any>(
                                        { value: c.id, label: c.name }
                                    );
                                    select.options.push(s);
                                }
                            )

                        });
                    });
            }
        });
    }
}
