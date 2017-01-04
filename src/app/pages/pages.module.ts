import { UserModule } from './users/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing, UserModule],
  declarations: [Pages],
})
export class PagesModule {
}
