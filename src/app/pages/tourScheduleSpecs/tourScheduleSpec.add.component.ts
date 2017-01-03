import { FormGroup } from '@angular/forms';
import {
    Component, OnInit, ViewEncapsulation,
    ViewChild, Output, EventEmitter, Input
} from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import {
    TourScheduleSpecService, SpecTypeService
} from '../../shared/services';
import { TourSchedule, TourScheduleSpec } from '../../shared/models';
import { AddComponent } from '../../core/add.component';
import { TOURSCHEDULESPEC_FORM_MODEL } from './tourScheduleSpec-form.model';
import {
    DynamicFormControlModel, DynamicFormService,
    DynamicFormOption, DynamicFormOptionConfig, DynamicSelectModel
} from '@ng2-dynamic-forms/core';
@Component({
    selector: 'tourScheduleSpec-add',
    encapsulation: ViewEncapsulation.None,
    templateUrl: '../../core/form.component.html'
})
export class TourScheduleSpecAddComponent extends AddComponent<TourScheduleSpec> {
    @ViewChild('formModal') formModal: ModalDirective;
    @Output() onSaved: EventEmitter<any> = new EventEmitter();
    model: TourScheduleSpec;
    tourSchedule: TourSchedule;
    constructor(private _service: TourScheduleSpecService, dynamicFormService: DynamicFormService,
    private specTypeService: SpecTypeService){
        // private priceTypeService: PriceTypeService) {
        super(TourScheduleSpec, dynamicFormService, _service, TOURSCHEDULESPEC_FORM_MODEL);
        TOURSCHEDULESPEC_FORM_MODEL.forEach(value => {
            if (value.id === 'spectype') {
                let select = value as DynamicSelectModel<any>;
                this.specTypeService.getAll().take(1).subscribe(data => {
                    data.forEach(r => {
                        // if (r.name !== 'superadmin') {
                        let s = new DynamicFormOption<any>(
                            { value: r.$key, label: r.name }
                        );
                        select.options.push(s);
                        // }
                    });
                });
            }
        });
    }
    open(): void {
        this.model = new TourScheduleSpec();
        this.model.tourSchedule = this.tourSchedule.id;
        super.open();
    }
    ngOnInit() {
        this.formGroup.controls['spectype'].valueChanges.subscribe(data => {
            if (data) {
                let d = <string>data;
                this.specTypeService.getByKey(data).take(1).subscribe(ct => {
                    this.formGroup.controls['spectypeName'].setValue(ct.name);
                });
            }
        });
        // this.formGroup.controls['priceType'].valueChanges.subscribe(data => {
        //     if (data) {
        //         let d = <string>data;
        //         this.priceTypeService.getByKey(data).take(1).subscribe(ct => {
        //             this.formGroup.controls['priceTypeName'].setValue(ct.name);
        //         });
        //     }
        // });
        super.ngOnInit();
    }
    setTourSchedule(tourSchedule: TourSchedule): void {
        this.tourSchedule = tourSchedule;
    }
   
}
