import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChocolateListComponent } from './chocolate-list/chocolate-list.component';
import { HomeChocolateComponent } from './home-chocolate/home-chocolate.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FormChocolatesComponent } from './form-chocolates/form-chocolates.component';
import { ChocolatesFormComponent } from './chocolates-form/chocolates-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ChocolateListComponent,
    HomeChocolateComponent,
    FormChocolatesComponent,
    ChocolatesFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
