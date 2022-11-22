import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { ChocolateListComponent} from './chocolate-list/chocolate-list.component';
import { HomeChocolateComponent } from './home-chocolate/home-chocolate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeChocolateComponent
  },
  {
    path: 'list',
    component: ChocolateListComponent
  },
  {
    path : 'brands',
    component: BrandsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
