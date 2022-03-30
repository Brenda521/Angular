import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente, Clientesa } from 'src/app/modelos/clientesa';
import { MesasEl } from 'src/app/modelos/mesas';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MesasService } from 'src/app/servicios/mesas.service';
import { ReservacionesService } from 'src/app/servicios/reservaciones.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { Reservaciones } from 'src/app/modelos/reservaciones';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservaciones-v2',
  templateUrl: './reservaciones-v2.component.html',
  styleUrls: ['./reservaciones-v2.component.css']
})
export class ReservacionesV2Component implements OnInit {


  ListaModels: Reservaciones[] = [];
  ListaClientes: Clientesa[] = [];

  idCliente: number = 0;
  nombreCliente: string = "";

  constructor(
    private miService:ReservacionesService, 
    private router: Router,
    private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.cargarInfo();
    this.cargarCliente();
  }


  miFormulario = new FormGroup({
    fecha : new FormControl('', [Validators.required])
  });

  get f(): { [key: string]: AbstractControl} {return this.miFormulario.controls; }

  cargarInfo(){
    this.miService.mostrarReservaciones().subscribe({
      next: (r) => [
      console.log(r),
      this.ListaModels = r.data
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

  cargarCliente(){
    this.clienteService.mostrarClientes().subscribe({
      next: (r) => [
      console.log(r),
      this.ListaClientes = r
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

  cargarDisponibles(){
    //mongo
    console.log(this.f['fecha'].value)
  }

  selectCliente(cliente: Clientesa){
    this.idCliente = cliente.id;
    this.nombreCliente = cliente.nombre;
  }

}
