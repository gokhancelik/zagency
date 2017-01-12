import { ComponentsModule } from './components/components.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import HomeModule from './home/home.module';
import { routing } from './client.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';

@NgModule({
    imports: [routing, CommonModule, HomeModule, NgbModule, ComponentsModule],
    exports: [],
    declarations: [ClientComponent],
    providers: [],
})
export class ClientModule { }
