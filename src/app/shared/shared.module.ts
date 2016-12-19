import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    ProductTypeService, TourService, ProductPhotoService, TourScheduleService,
    CompanyService, TourSchedulePriceService, PriceTypeService, CurrencyTypeService,
    TourProgramService, TourDestinationService, GoogleGeoCodingService,
    CompanySpecService, TourScheduleSpecService, SpecTypeService, PhotoLocationService,
    ProductTypeCategoryService, ProductService
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
            providers: [ProductTypeService, TourService, ProductPhotoService, PhotoLocationService,
                TourScheduleService, CompanyService, TourSchedulePriceService, SpecTypeService,
                PriceTypeService, CurrencyTypeService, CompanySpecService, TourScheduleSpecService,
                TourProgramService, TourDestinationService, GoogleGeoCodingService,
                ProductTypeCategoryService, ProductService]
        };
    }
}
