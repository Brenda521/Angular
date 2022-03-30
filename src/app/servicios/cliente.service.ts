import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Clientesa } from '../modelos/clientesa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiURL = 'http://127.0.0.1:3333/'

  //cliente es el servicio de angular para consumir apis
  constructor(private http:HttpClient) { }

  agregar(ca:Clientesa):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}cliente/actions`,ca,{headers});
    
  }
  mostrarClientes():Observable<Clientesa[]>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    const url = `${this.apiURL}cliente/actions`;
    return this.http.get<Clientesa[]>(url,{headers});
} 
  deleteCliente(id:number):Observable<Clientesa>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))   
    const url = `${this.apiURL}cliente/actions/${id}`;
    return this.http.delete<Clientesa>(url,{headers})
  }
  updateCliente(id:number,cliac:Clientesa):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))    
    const url = `${this.apiURL}cliente/actions/${id}`;
    return this.http.put(url,cliac,{headers})
  }


}
