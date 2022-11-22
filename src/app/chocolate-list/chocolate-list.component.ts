import { Component, OnInit } from '@angular/core';
import { Chocolate } from './chocolate';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {

  chocolates: Chocolate[] = [
    {
      name: 'Dos corazones',
      brand: 'Milka',
      price: 350,
      stock: 2,
      image: 'assets/img/Doscorazones.jpg',
      ofert: false,
      quantity: 0,
    },
    {
      name: 'Ferrero Rocher',
      brand: 'Ferrero',
      price: 350,
      stock: 4,
      image: 'assets/img/ferrerorocher.jpg',
      ofert: true,
      quantity: 0,
    },
    {
      name: 'Milka',
      brand: 'Milka',
      price: 280,
      stock: 0,
      image: 'assets/img/milka.jpg',
      ofert: false,
      quantity: 0,
    },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
