import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  apiURL = environment.urlGlobal;

  constructor(private http:HttpClient) { }

  index(): Observable<any>{
    const url = this.apiURL + 'cargo/actions';
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.get<any>(url, {headers});
  }
}
