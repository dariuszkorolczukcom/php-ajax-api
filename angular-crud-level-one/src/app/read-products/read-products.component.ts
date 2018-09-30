import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-read-products',
  templateUrl: './read-products.component.html',
  styleUrls: ['./read-products.component.css'],
  providers: [ProductService]
})
export class ReadProductsComponent implements OnInit {

  @Output() show_create_product_event = new EventEmitter();
  @Output() show_read_one_product_event = new EventEmitter();
  @Output() show_update_product_event = new EventEmitter();
  @Output() show_delete_product_event = new EventEmitter();

  // store list of products
  products: Product[];

  // initialize productService to retrieve list products in the ngOnInit()
  constructor(private productService: ProductService) { }

  // methods that we will use later
  createProduct() {
    // tell the parent component (AppComponent)
    this.show_create_product_event.emit({
      title: 'Create Product'
    });
  }
  readOneProduct(id) {
    console.log('rp comp readOneProduct');
    // tell the parent component (AppComponent)
    this.show_read_one_product_event.emit({
      product_id: id,
      title: 'Read One Product'
    });
  }
  // when user clicks the 'update' button
updateProduct(id) {
  // tell the parent component (AppComponent)
  this.show_update_product_event.emit({
      product_id: id,
      title: 'Update Product'
  });
}
  deleteProduct(id) { }

  // Read products from API.
  ngOnInit() {
    this.productService.readProducts()
      .subscribe(products =>
        this.products = products['records']
      );
  }
}
