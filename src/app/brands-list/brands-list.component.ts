import { Component, OnInit } from '@angular/core';
import { brands } from "./brands";

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent implements OnInit {

  constructor() { }

  brands: brands [] = [
    {
      name: "Ferrero",
      year:  1946,
      country: "italia"
    },
    {
      name: 'Milka',
      year:  1901,
      country: "argentina"
    },

    ]
  ngOnInit(): void {
  }

}
