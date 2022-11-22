import { Component, OnInit } from '@angular/core';
import { ChocolateDataService } from '../chocolates-data-service.service';
import { Chocolate } from './chocolate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {
  subscription: Subscription | any;
  chocolates: Chocolate[] = [];
  model: Chocolate = { id: 0, image: '', name: '', brand: '', price: 0, stock: 0};

  constructor( private Chocolatedataservice : ChocolateDataService) {}

  ngOnInit(): void {

    /*cuando se carga la pagina*/
    this.Chocolatedataservice.getAll()
    .subscribe(chocolates => this.chocolates = chocolates );
    this.subscription = this.Chocolatedataservice.refresh$.subscribe(() => (
      this.getAll()
    ))
  }
  onsubmit() {
    this.Chocolatedataservice.post(this.model)
    .subscribe((response: Chocolate) => console.log(response));

  }
  getAll() {
    this.Chocolatedataservice.getAll()
    .subscribe(chocolates => this.chocolates = chocolates);
  }

  deletechocolate(chocolate : Chocolate) {
    this.Chocolatedataservice.delete(chocolate.id)
    .subscribe((response: Chocolate) => console.log(response));
  }
}
