import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { TopSellersComponent } from '../top-sellers/top-sellers.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, SliderComponent, TopSellersComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
