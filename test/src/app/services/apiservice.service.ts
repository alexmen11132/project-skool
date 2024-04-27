
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = "https://railway.stepprojects.ge/"

  test1: any
  test2: any

  constructor(private http: HttpClient) { }
  
  getStations() {
    return this.http.get(this.apiURL + "api/stations")
  }

}
