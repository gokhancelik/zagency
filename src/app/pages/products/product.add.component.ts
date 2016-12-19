import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Product, ProductType } from '../../shared/models';
import { ProductPhoto } from '../productPhoto/productPhoto.model';
import { ModalDirective } from 'ng2-bootstrap';
import {
    ProductTypeService,
    ProductService
} from '../../shared/services';

@Component({
    selector: 'product-add',
    templateUrl: 'product.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProductAddComponent implements OnInit {
    model: Product = new Product();
    productTypes: ProductType[];
    submitted: boolean;
    errorMessage: string;
    isNew: boolean = true;
    constructor(
        private productTypeService: ProductTypeService,
        private productService: ProductService
    ) {
    }
    ngOnInit() {
        this.productTypeService.getList().subscribe(
            data => this.productTypes = data,
            error => this.errorMessage = <any>error);
    }
    saveProduct() {
        this.submitted = true;
        this.productService.add(this.model).subscribe(
            data => {
                this.submitted = false;
                this.model = data;
            },
            error => {
                this.errorMessage = <any>error;
                this.submitted = false;
            }
        );
    }
}
