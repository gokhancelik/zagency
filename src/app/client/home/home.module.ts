import { routing } from './home.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
    imports: [routing, FormsModule, CommonModule, NgbModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export default class HomeModule { }
