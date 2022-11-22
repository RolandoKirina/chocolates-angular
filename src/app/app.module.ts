import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { HomeChocolateComponent } from './home-chocolate/home-chocolate.component';
import { BrandsListComponent } from './brands-list/brands-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChocolateListComponent,
    HomeChocolateComponent,
    BrandsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
