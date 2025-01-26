import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop',
  imports: [CommonModule, ProductsComponent, FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  filterText: string = '';
  minPrice: number | null = null;
  maxPrice: number | null = null;
  selectedCategory: string = '';
  categories: string[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.categories = [
        ...new Set(products.map((product) => product.category)),
      ];
    });
  }

  onFilterChange(): void {}
}
