import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/models';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
    selector: 'product-list',
    templateUrl: 'product.list.component.html'
})
export class ProductListComponent implements OnInit {
    list: Array<Product>;
    errorMessage: string;
    loading: boolean;
    source: LocalDataSource = new LocalDataSource();
    settings = {
        add: {
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,

        },
        delete: {
            confirmDelete: true
        },
        columns: {
            name: {
                title: 'Name',
                type: 'string'
            }
        },
        mode: 'external'

    };
    constructor(private productService: ProductService, private router: Router) { }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.loading = true;
        this.productService.getList().subscribe(
            data => {
                this.loading = false;
                this.source.load(data);
            },
            error => this.errorMessage = <any>error);
    }

    onDelete(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            let tt: Product = event.data as Product;
            this.productService.delete(tt.productBaseId).subscribe(
                data => this.getList(),
                error => alert(error));
        } else {

        }
    };
    onCreate(event): void {
        this.router.navigate(['pages/products/newProduct']);

    }
    onEdit(event): void {
        let tt: Product = event.data as Product;
        this.router.navigate(['pages/products/edit/' + tt.productBaseId]);
    }
}
