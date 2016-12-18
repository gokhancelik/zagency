import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    TourTypeService, TourService, TourPhotoService, TourScheduleService,
    CompanyService, TourSchedulePriceService, PriceTypeService, CurrencyTypeService,
    TourProgramService, TourDestinationService, GoogleGeoCodingService
} from './services/index';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [],
    exports: [CommonModule, FormsModule, RouterModule]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [TourTypeService, TourService, TourPhotoService,
                TourScheduleService, CompanyService, TourSchedulePriceService,
                PriceTypeService, CurrencyTypeService,
                TourProgramService, TourDestinationService, GoogleGeoCodingService]
        };
    }
}
