import { TipoPlatillos, TipoPlatillosEl } from '../modelos/tipo-platillos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoPlatillosService {

  apiURL ='http://127.0.0.1:3333/'


  constructor(private http:HttpClient) { }

    mostrarTipoPLatillos():Observable<TipoPlatillosEl[]>{
      let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
      const url = `${this.apiURL}tipo/actions`;
    return this.http.get<TipoPlatillosEl[]>(url,{headers});
  } 
  mostrarCategoria(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    const url = `${this.apiURL}platillo/categoria/${id}`;
  return this.http.get(url,{headers});
} 

  registrarTipoPlat(tpfm:TipoPlatillos):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.post(`${this.apiURL}tipo/actions`,tpfm,{headers})
  }

  deleteTipoPlat(id:number):Observable<TipoPlatillosEl>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))   
    const url = `${this.apiURL}tipo/actions/${id}`;
    return this.http.delete<TipoPlatillosEl>(url,{headers})
  }
  updateTipoPlat(id:number,tpfm:TipoPlatillos):Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))    
    const url = `${this.apiURL}tipo/actions/${id}`;
    return this.http.put(url,tpfm,{headers})
  }
  
}
