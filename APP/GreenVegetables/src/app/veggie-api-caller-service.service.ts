import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vegetable } from './Vegetable';

@Injectable({
  providedIn: 'root'
})
export class VeggieApiCallerServiceService {

  endpoint = environment.api;
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAllVegetables(): Observable<Vegetable[]> {
    return this.httpClient.get<Vegetable[]>(this.endpoint + '/vegetable');
  }

  getSingleVegetable(id: number): Observable<Vegetable> {
    return this.httpClient.get<Vegetable>(this.endpoint + '/Vegetable/' + id);
  }

  addVegetable(data?: Vegetable): Observable<Vegetable> {
    return this.httpClient.post<Vegetable>(this.endpoint + '/Vegetable', JSON.stringify(data), this.httpHeader);
  }

  updateVegetable(id: number, data?: Vegetable): Observable<Vegetable> {
    return this.httpClient.put<Vegetable>(this.endpoint + '/Vegetable/' + id, JSON.stringify(data), this.httpHeader);
  }

  deleteVegetable(id: number){
    return this.httpClient.delete<Vegetable>(this.endpoint + '/Vegetable/' + id, this.httpHeader);
  }
}
