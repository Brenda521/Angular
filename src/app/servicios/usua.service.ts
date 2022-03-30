import { TipoPlatillos, TipoPlatillosEl } from '../modelos/tipo-platillos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { catchError, Observable, of } from 'rxjs';
import { Logeo } from '../modelos/logearse';
import { Usuarios } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuaService {

  //apiURL = 'http://192.168.43.15:3333/'
  apiURL = environment.urlGlobal;

  //cliente es el servicio de angular para consumir apis
  constructor(private http:HttpClient) { }

  //el us es como el multiplatfor de insomnia

  register(data:any):Observable<any>{
    const url = this.apiURL + 'users';
    return this.http.post(url,data);
  }

  logueo(lo:Logeo):Observable<any>{
    return this.http.post(`${this.apiURL}user/login`,lo);
  }

  getRol():Observable<any>{
    let headers = new HttpHeaders().set('Authorization','bearer ' + localStorage.getItem('token'))
    return this.http.get(`${this.apiURL}admin`,{headers})

  }
  
}
