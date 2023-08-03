import { Component } from '@angular/core';
import { ProductDTO } from '../PoductDTO';// Corrected import path
import { ProductServiceService } from '../ProductService/product-service.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productDTO: ProductDTO = new ProductDTO(); // Corrected the instance creation
  msg?: string;
  constructor(private fb: FormBuilder, private productService: ProductServiceService, private route: Router) { }
  ProductRegistrationForm = this.fb.group({
    name: ['', [Validators.pattern('^[a-zA-Z ]{3,}$'), Validators.required]],
    price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    description: ['', [Validators.required, Validators.pattern(/^[A-Za-z]{2,}$/)]],
  });
  get name() { return this.ProductRegistrationForm.get('name') }
  get price() { return this.ProductRegistrationForm.get('price') }
  get image() { return this.ProductRegistrationForm.get('image') }
  get description() { return this.ProductRegistrationForm.get('description') }

  
  addProduct() {
    this.msg = '';
    if (this.name?.hasError('pattern') || this.name?.hasError('required')) {
      this.msg = "check your product name !";
      alert(this.msg);
    } else if (this.price?.hasError('pattern') || this.price?.hasError('required')) {
      this.msg = "check your product price !";
      alert(this.msg);
    } else if (this.description?.hasError('pattern') || this.description?.hasError('required')) {
      this.msg = "check your product description !";
      alert(this.msg);
    } else {
      this.productService.createProduct(this.productDTO).subscribe(
        (res) => {
          alert("Product name Already exists!");
        },
        (error) => {
          alert("An error occurred");
        }
      );
    }  
  }
}
