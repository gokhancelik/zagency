import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgaModule } from '../../theme/nga.module';
import {
    routing, TourCategoryListComponent, TourCategoryComponent,
    TourCategoryEditComponent, TourCategoryAddComponent
} from './index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import * as moment from 'moment';
import { DropdownModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {
    DynamicFormsCoreModule, DynamicFormService, DynamicFormRelationService
} from '@ng2-dynamic-forms/core';
import {
    DynamicFormsBootstrapUIModule
} from '@ng2-dynamic-forms/ui-bootstrap';
@NgModule({

    imports: [routing, RouterModule, CommonModule, FormsModule, DynamicFormsCoreModule,
        DynamicFormsBootstrapUIModule, FormsModule,
        ReactiveFormsModule,
        Ng2SmartTableModule, NgaModule, ModalModule, DropdownModule],
    exports: [],
    declarations: [TourCategoryListComponent, TourCategoryComponent,
        TourCategoryEditComponent, TourCategoryAddComponent
    ],
    providers: [DynamicFormService, DynamicFormRelationService],
})
export default class TourCategoryModule { }
