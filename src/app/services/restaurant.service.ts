import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private _http:HttpClient) { }

  addrestaurant(data: any): Observable<any> {
    return this._http.post(' http://localhost:3000/restaurant', data);
  }
  
  updaterestaurant(Name: String, data:any): Observable<any> {
    return this._http.put( `http://localhost:3000/restaurant/+{String}`, data);
  }




getrestaurantlist(): Observable<any> {
    return this._http.get(' http://localhost:3000/restaurant');

}
 deleterestaurant(Name:String): Observable<any> {
  return this._http.delete('http://localhost:3000/restaurant/+{string}');
 }

}
