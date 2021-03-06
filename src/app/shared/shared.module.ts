import { StakeholderService } from './services/stakeholder.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
    TourCategoryService, TourService, TourScheduleService,
    CompanyService, TourSchedulePriceService, PriceTypeService, CurrencyTypeService,
    TourProgramService, TourDestinationService, GoogleGeoCodingService, CompanyServiceService, PublishingTourService,
    CompanySpecService, TourScheduleSpecService, SpecTypeService, ImageSizeService,
    UserService, RoleService, StorageService
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
            providers: [TourCategoryService, TourService, ImageSizeService,
                TourScheduleService, CompanyService, TourSchedulePriceService, SpecTypeService,
                PriceTypeService, CurrencyTypeService, CompanySpecService, TourScheduleSpecService,
                TourProgramService, TourDestinationService, GoogleGeoCodingService,
                CompanyServiceService, PublishingTourService, StakeholderService,
                UserService, RoleService, StorageService]
        };
    }
}
