import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    TourCategoryService, TourService, ProductPhotoService, TourScheduleService,
    CompanyService, TourSchedulePriceService, PriceTypeService, CurrencyTypeService,
    TourProgramService, TourDestinationService, GoogleGeoCodingService, CompanyServiceService,PublishingTourService,
    CompanySpecService, TourScheduleSpecService, SpecTypeService, ImageSizeService,
    ProductService, UserService, RoleService, StorageService, B2BService
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
            providers: [TourCategoryService, TourService, ProductPhotoService, ImageSizeService,
                TourScheduleService, CompanyService, TourSchedulePriceService, SpecTypeService,
                PriceTypeService, CurrencyTypeService, CompanySpecService, TourScheduleSpecService,
                TourProgramService, TourDestinationService, GoogleGeoCodingService, CompanyServiceService,PublishingTourService,
                ProductService, UserService, RoleService, StorageService, B2BService]
        };
    }
}
