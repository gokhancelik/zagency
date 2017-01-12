import { AdminRootComponent } from './admin.root.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './admin.routing';
import { NgaModule } from '../theme/nga.module';
import { Admin } from './admin.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Admin, AdminRootComponent],
})
export class AdminModule {
}
