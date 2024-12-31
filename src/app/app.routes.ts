import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'products',
        loadComponent: () => import('@features/products/products.component').then((m) => m.ProductsComponent)
      },
      {
        path: 'categories',
        loadComponent: () => import('@features/product-categories/product-categories.component').then((m) => m.ProductCategoriesComponent)
      },
      {
        path: '', redirectTo: 'products', pathMatch: 'full'
      }
    ]
  },
];
