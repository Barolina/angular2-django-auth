import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  providers:[ProductService],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	products: Product[];
	errorMsg: String;

	constructor(private productService: ProductService) { 

	}

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		let x = this.productService.getProducts().subscribe(products => this.products = products,
			error => this.errorMsg = <any>error);
		return x;
	}
}
