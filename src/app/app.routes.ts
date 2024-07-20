import { Routes } from '@angular/router';
import { ProductsComponent } from './page/components/products/products.component';
import { LoginComponent } from './page/components/auth/login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'products', component:ProductsComponent },
    {path: 'productsDetail', redirectTo: ''}
];
