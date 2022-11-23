import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { tap} from 'rxjs/operators';
import { Chocolate } from './chocolate-list/chocolate';

@Injectable({
  providedIn: 'root'
})

export class ChocolateDataService {
  URL : string = "https://62c8b2280f32635590dc1ac8.mockapi.io/api/chocolates";

  private _refresh$ = new Subject<void>();
  constructor(private http : HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

/*devuelve un observable como respuesta*/
  public getAll(): Observable<Chocolate[]>{

    return this.http.get<Chocolate[]>(this.URL);
  }
  public post(Chocolates : Chocolate): Observable<Chocolate> {

    return this.http.post<Chocolate>(this.URL, Chocolates).pipe(
      tap(() => (
        this._refresh$.next()
      ))
    );
  }

  public delete(id: number): Observable<Chocolate> {
    return this.http.delete<Chocolate>(this.URL + "/" + id).pipe(
      tap(() => (
        this._refresh$.next()
      ))
    );
  }


}
