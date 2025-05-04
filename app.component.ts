import { Component } from '@angular/core';
import { ChartType, ChartConfiguration } from 'chart.js';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { AssetsComponent } from './assets/assets.component';
import { ProductsComponent } from './products/products.component';
import { ChartComponent } from './chart/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule, AssetsComponent, ProductsComponent, ChartComponent, NgChartsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subClasses: { name: string; percentage: number }[] = [
    { name: 'Large Cap', percentage: 50 },
    { name: 'Mid Cap', percentage: 30 },
    { name: 'Small Cap', percentage: 20 }
  ];

    selectedAssetClass: string = 'Equity'; // Default so the chart label doesn't look empty
    selectedSubClassName: string = 'Large Cap';
    // Static data for the Asset Class Pie Chart
    assetClassChartLabels: string[] = ['Equity', 'Fixed Income', 'Real Estate', 'Commodities', 'Cash & Equivalents'];
    assetClassChartData: number[] = [35, 25, 15, 15, 10];
    pieChartType: ChartType = 'pie';

    assetClassChartColors: string[] = [
      '#FFC1B3',  // Light Red (Equity)
      '#B3FFB3',  // Light Green (Fixed Income)
      '#B3D1FF',  // Light Blue (Real Estate)
      '#FFB3D9',  // Light Pink (Commodities)
      '#FFF4B3'   // Light Yellow (Cash & Equivalents)
    ];

    pieChartOptions: ChartConfiguration['options'] = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
    }

  onAssetSelected(data: { name: string; subClasses: { name: string; percentage: number }[] }) {
    this.selectedAssetClass = data.name;
    console.log('Received SubClasses in AppComponent:', data.subClasses);
    this.subClasses = data.subClasses;
  }

  onSubClassSelected(subClassName: string) {
    this.selectedSubClassName = subClassName;
    console.log('Selected Subclass:', subClassName);
  }
  
}
