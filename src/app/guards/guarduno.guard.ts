import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuaService } from '../servicios/usua.service';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class GuardunoGuard implements CanActivate {

  constructor(
  private serve:UsuaService,
  private rutas:Router,
  ){}

  guardian(flag:boolean):any{
    if(flag == false){
      Swal.fire({
        icon: 'error',
        title: 'No eres admin',
      })
      this.rutas.navigate(['/','home']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const cooki = localStorage.getItem('token')
      this.serve.getRol().subscribe(data =>{
      this.guardian(data);
    })
      return true;
  }
  
}
