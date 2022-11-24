import { Component, OnInit} from '@angular/core';
import { ChocolateDataService } from '../chocolates-data-service.service';
import { Chocolate } from './chocolate';
import { Subscription } from 'rxjs';
import { FormChocolatesComponent } from "../form-chocolates/form-chocolates.component";

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  subscription: Subscription | any;
  chocolates: Chocolate[] = [];
  model: Chocolate = { id: 0, image: '', name: '', brand: '', price: 0, stock: 0};
  form : FormChocolatesComponent
  constructor( private Chocolatedataservice : ChocolateDataService) {}

  ngOnInit(): void {

    /*cuando se carga la pagina*/
    this.Chocolatedataservice.getAll()
    .subscribe(chocolates => this.chocolates = chocolates );
    this.subscription = this.Chocolatedataservice.refresh$.subscribe(() => (
      this.getAll()
    ))
  }

  getAll() {
    this.Chocolatedataservice.getAll()
    .subscribe(chocolates => this.chocolates = chocolates);

  }
  onsubmit() {
    this.Chocolatedataservice.post(this.model)
    .subscribe((response: Chocolate) => console.log(response));

  }
  deletechocolate(chocolate : Chocolate) {
    this.Chocolatedataservice.delete(chocolate.id)
    .subscribe((response: Chocolate) => console.log(response));
  }
  }

