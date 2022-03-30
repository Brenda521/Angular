import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesas, MesasEl } from '../modelos/mesas';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  apiURL = environment.urlGlobal;


  constructor(private http:HttpClient) { }

    mostrarMesas():Observable<MesasEl[]>{
      let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
      const url = `${this.apiURL}mesa/actions`;
    return this.http.get<MesasEl[]>(url,{headers});
  } 
  registrarMesa(mfm:Mesas):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}mesa/actions`,mfm,{headers})
  }
  deleteMesas(id:number):Observable<MesasEl>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))   
    const url = `${this.apiURL}mesa/actions/${id}`;
    return this.http.delete<MesasEl>(url,{headers})
  }
  updateMesas(id:number,mfm:Mesas):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))    
    const url = `${this.apiURL}mesa/actions/${id}`;
    return this.http.put(url,mfm,{headers})
  }


}
