import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() filterText: string = '';
  @Input() minPrice: number | null = null;
  @Input() maxPrice: number | null = null;
  @Input() selectedCategory: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
      this.filteredProducts = data;
      this.filterProducts();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['filterText'] ||
      changes['minPrice'] ||
      changes['maxPrice'] ||
      changes['selectedCategory']
    ) {
      this.filterProducts();
    }
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesText =
        product.title.toLowerCase().includes(this.filterText.toLowerCase()) ||
        product.category.toLowerCase().includes(this.filterText.toLowerCase());
      const matchesMinPrice =
        this.minPrice === null || product.price >= this.minPrice;
      const matchesMaxPrice =
        this.maxPrice === null || product.price <= this.maxPrice;
      const matchesCategory =
        this.selectedCategory === '' ||
        product.category === this.selectedCategory;
      return (
        matchesText && matchesMinPrice && matchesMaxPrice && matchesCategory
      );
    });
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
