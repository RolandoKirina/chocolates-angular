import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { ChocolateDataService } from '../chocolates-data-service.service';
import { Chocolate } from '../chocolate-list/chocolate';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-chocolates',
  templateUrl: './form-chocolates.component.html',
  styleUrls: ['./form-chocolates.component.scss']
})
export class FormChocolatesComponent implements OnInit {

  subscription: Subscription | any;

  model: Chocolate = { id: 0, image: '', name: '', brand: '', price: 0, stock: 0};

  @Input()
  stock: number;


  constructor( private Chocolatedataservice : ChocolateDataService) { }

  ngOnInit(): void {
  }


onsubmit() {
  this.Chocolatedataservice.post(this.model)
  .subscribe((response: Chocolate) => console.log(response));

}

}
