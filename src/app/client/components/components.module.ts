import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@NgModule({
    imports: [RouterModule],
    exports: [HeaderComponent, FooterComponent],
    declarations: [HeaderComponent, FooterComponent],
    providers: [],
})
export class ComponentsModule { }
