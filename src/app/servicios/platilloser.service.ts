import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platillos, PlatillosEl } from '../modelos/platillos';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatilloserService {

  apiURL = 'http://127.0.0.1:3333/'


  constructor(private http:HttpClient) { }

    mostrarPLatillos():Observable<PlatillosEl[]>{
      let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
      const url = `${this.apiURL}platillo/actions`;
      return this.http.get<PlatillosEl[]>(url,{headers});
    }

    registrarPlat(pfm:Platillos):Observable<any>{
      let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
      return this.http.post(`${this.apiURL}platillo/actions`,pfm,{headers})
    }

    deletePlat(id:number):Observable<PlatillosEl>{
      let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))   
      const url = `${this.apiURL}platillo/actions/${id}`;
      return this.http.delete<PlatillosEl>(url,{headers})
    }
    updatePlat(id:number,pfm:Platillos):Observable<any>{
      let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))    
      const url = `${this.apiURL}platillo/actions/${id}`;
      return this.http.put(url,pfm,{headers})
    }
  }

