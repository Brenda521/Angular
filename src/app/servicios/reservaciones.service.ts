import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Reservaciones, ReservacionesEl } from '../modelos/reservaciones';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  apiURL = environment.urlGlobal;


  constructor(private http:HttpClient) { }

  mostrarReservaciones():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    const url = `${this.apiURL}reservacion/actions`;
    return this.http.get<any>(url,{headers});
  }
  registrarRes(rm:Reservaciones):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}reservacion/actions`,rm,{headers})
  }
  deleteRes(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))   
    const url = `${this.apiURL}reservacion/actions/${id}`;
    return this.http.delete(url,{headers})
  }
  updateRes(id:number,rm:Reservaciones):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))    
    const url = `${this.apiURL}reservacion/actions/${id}`;
    return this.http.put(url,rm,{headers})
  }

  indexMongo(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}buscarMongo`,data,{headers})
  }

  storeMongo(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}insMongo`,data,{headers})
  }

  updateMongo(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}ocupacionMongo`,data,{headers})
  }
}
