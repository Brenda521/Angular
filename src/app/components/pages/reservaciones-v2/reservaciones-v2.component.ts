import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente, Clientesa } from 'src/app/modelos/clientesa';
import { MesasEl } from 'src/app/modelos/mesas';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MesasService } from 'src/app/servicios/mesas.service';
import { ReservacionesService } from 'src/app/servicios/reservaciones.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { Reservaciones, ReservacionesMongo } from 'src/app/modelos/reservaciones';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservaciones-v2',
  templateUrl: './reservaciones-v2.component.html',
  styleUrls: ['./reservaciones-v2.component.css']
})
export class ReservacionesV2Component implements OnInit {


  ListaModels: ReservacionesMongo[] = [];
  ListaClientes: Clientesa[] = [];
  enlistaMesas: MesasEl[] = [];
  mesasAuto: any[] = [];

  idCliente: number = 0;
  nombreCliente: string = "";
  seleccionado: boolean = false;

  constructor(
    private miService:ReservacionesService,
    private mesasService:MesasService, 
    private router: Router,
    private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.cargarInfo();
    this.cargarCliente();
    this.cargarMesas();
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


  cargarMesas(){
    this.mesasService.mostrarMesas().subscribe({
      next: (r) => [
      console.log(r),
      this.enlistaMesas = r
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

  generarMesas(){
    this.mesasAuto = [];
    this.enlistaMesas.forEach(mesas => {
      var aux = {
        "num_mesa": mesas.num_mesa,
        "idMesa": mesas.id,
        "ocupado": false,
        "fecha": this.f['fecha'].value
      }
      this.mesasAuto.push(aux)
    });
  }

  cargarDisponibles(){
    if (this.f['fecha'].value != ''){
      //mongo
      console.log(this.f['fecha'].value)
      const miRequest = {
        'fecha': this.f['fecha'].value
      }
      this.miService.indexMongo(miRequest).subscribe({
        next: (r) => [
        console.log(r),
        this.ListaModels = r.data,
        this.generarMesas(),
        this.acomodarMesas()
      ],
        error: (e) => [console.error(e)],
        complete: () => console.info('complete') 
      })
    }
  }

  acomodarMesas(){
    if (this.ListaModels.length == 0){
      const miRequest = {
        'arreglo_mesas': this.mesasAuto
      }
      this.miService.storeMongo(miRequest).subscribe({
        next: (r) => [
        console.log(r),
        this.cargarDisponibles()
      ],
        error: (e) => [console.error(e)],
        complete: () => console.info('complete') 
      })
    }
  }

  selectCliente(cliente: Clientesa){
    this.idCliente = cliente.id;
    this.nombreCliente = cliente.nombre;
    this.seleccionado = true;
  }

  selectReservacion(reservacion: ReservacionesMongo){
    reservacion.ocupado = !reservacion.ocupado;
    const miRequest = {
      'id': reservacion._id,
      'estado': reservacion.ocupado
    }
    this.miService.updateMongo(miRequest).subscribe({
      next: (r) => [
      console.log(r),
      this.cargarDisponibles()
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

}
