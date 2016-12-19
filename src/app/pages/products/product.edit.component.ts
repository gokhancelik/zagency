import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product, ProductType } from '../../shared/models';
import { ModalDirective } from 'ng2-bootstrap';
import {
    ProductTypeService,
    ProductService
} from '../../shared/services/index';

@Component({
    selector: 'product-edit',
    templateUrl: 'product.form.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProductEditComponent implements OnInit {

    @Input() model: Product;
    productTypes: ProductType[];
    submitted: boolean;
    errorMessage: string;
    isNew: boolean = true;
    constructor(
        private productTypeService: ProductTypeService,
        private productService: ProductService,
        private router: Router,
        private activetedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        this.getProduct();
        this.productTypeService.getList().subscribe(
            data => this.productTypes = data,
            error => this.errorMessage = <any>error);
    }
    getProduct() {
        this.activetedRoute.params.forEach((params: Params) => {
            let productBaseId = params['id'];
            this.productService.getById(productBaseId)
                .subscribe(
                editProduct => {
                    this.model = editProduct;
                },
                err => {
                    this.errorMessage = err;
                });
        });
    }
    saveProduct() {
        this.submitted = true;
        this.productService.update(this.model, this.model.id).subscribe(
            data => {
                this.submitted = false;
                // this.router.navigate(['/products/list']);
            },
            error => {
                this.errorMessage = <any>error;
                this.submitted = false;
            }
        );
    }
}
