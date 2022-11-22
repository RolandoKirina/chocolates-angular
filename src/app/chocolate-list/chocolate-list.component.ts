import { Component, OnInit } from '@angular/core';
import { ChocolateDataService } from '../chocolates-data-service.service';
import { Chocolate } from './chocolate';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent implements OnInit {

  chocolates: Chocolate[] = [];

  constructor( private Chocolatedataservice : ChocolateDataService) {}

  ngOnInit(): void {
    /*cuando se carga la pagina*/
    this.Chocolatedataservice.getAll()
    .subscribe(chocolates => this.chocolates = chocolates );
  }

}
