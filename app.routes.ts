import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { AssetsComponent } from './assets/assets.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: AssetsComponent },
  { path: 'products', component: ProductsComponent }
];

export const AppRoutesProvider = provideRouter(routes);
