import { HomeComponent } from './home.component';
import { CanActivate, Routes } from '@angular/router';
import { Route, RouterModule } from '@angular/router';

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];
export const routing = RouterModule.forChild(HomeRoutes);