import { iperson } from './personInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonServicesService {
  private address:string="assets/JSONData/personData.json";
  getdata(): Observable<iperson[]>{
    return this.http.get<iperson[]>(this.address);
  }

  constructor(private http:HttpClient) { }
}
