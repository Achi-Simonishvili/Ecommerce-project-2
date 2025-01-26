import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.scss'],
})
export class TopSellersComponent implements OnInit {
  topProducts: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productsService.getTopRatedProducts().subscribe((data: Product[]) => {
      this.topProducts = data;
    });
  }

  viewProductDetail(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
