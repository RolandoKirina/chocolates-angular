import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChocolatesFormComponent } from './chocolates-form/chocolates-form.component';
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
    component: ChocolatesFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
