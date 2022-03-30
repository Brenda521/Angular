import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipoPlatillosEl } from '../modelos/tipo-platillos';
import { TipoPlatillosService } from '../servicios/tipo-platillos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  arr!: TipoPlatillosEl[];

  constructor(private rutas: Router,private servi:TipoPlatillosService) { }

  ngOnInit(): void {
    this.getPlatillos();
  }
  cerrar():void{
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Sesion Cerrada',
      showConfirmButton: false,
      timer: 1500
    });
    //this.rol = '0';
    localStorage.removeItem('token');
    this.rutas.navigate(['/login']);
    
  }

  getPlatillos():void{
    this.servi.mostrarTipoPLatillos().subscribe(data=>{
      this.arr=data
    })
  }


}
