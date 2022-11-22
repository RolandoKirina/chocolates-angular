import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Chocolate } from './chocolate-list/chocolate';

@Injectable({
  providedIn: 'root'
})
export class ChocolateDataService {
  URL : string = "https://62c8b2280f32635590dc1ac8.mockapi.io/api/chocolates";
  constructor(private http : HttpClient) {
  }

/*devuelve un observable como respuesta*/
  public getAll(): Observable<Chocolate[]>{

    return this.http.get<Chocolate[]>(this.URL)
      .pipe(
        tap((chocolates: Chocolate[]) => chocolates.forEach(chocolates => chocolates.quantity = 0))
      );
  }

}
