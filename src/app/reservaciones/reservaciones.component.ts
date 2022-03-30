import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clientesa } from '../modelos/clientesa';
import { MesasEl } from '../modelos/mesas';
import { Reservaciones, ReservacionesEl } from '../modelos/reservaciones';
import { MesasService } from '../servicios/mesas.service';
import { ReservacionesService } from '../servicios/reservaciones.service';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';
import { ClienteService } from '../servicios/cliente.service';


@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  resForm!: FormGroup;
  resarr!:any[];
  selArrMes!:MesasEl[];
  selArrClie!:Clientesa[];

  constructor(private rv:FormBuilder,
    private servi:ReservacionesService,
    private goback:Location,private serviMes:MesasService, 
    private serviClien:ClienteService) { }

  ngOnInit(): void {
    this.resForm = this.rv.group({
      fecha:["",[Validators.required]],
      id_cliente:["",[Validators.required]],
      id_mesa:["",[Validators.required]]
    })
    this.mostrarRes();
    this.getClien();
    this.getMesa();

  }
 
  registrarRes():void{

    console.log(this.resForm.value);

    this.servi.registrarRes(this.resForm.value).subscribe((data: any)=>{
      console.log(data);
      //setItem, es para darle el valor a la variable que esta entre comillas
      //localStorage.setItem("token",data.token);
      Swal.fire({
        position: 'center',
        icon: 'success', 
        title: 'Se registro correctamente',
        showConfirmButton: false,
        timer: 1500
      });this.mostrarRes()
      this.resForm.reset();
    },error =>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al Insertar',
      })
    })

  }
  regresar():void{
    this.goback.back();
  }
  mostrarRes(): void{
    this.servi.mostrarReservaciones().subscribe(data=>{
      console.log(data)
      this.resarr = data
    })
  }
  eliminarRes(id:number): void{
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
    window.alert('Se elimino correctamente');
    this.servi.deleteRes(id).subscribe({
      next: ()=> [this.mostrarRes()]
    });
    }
  }
  getMesa():void{
    this.serviMes.mostrarMesas().subscribe(data=>{
      this.selArrMes=data
    })
  }
  getClien():void{
    this.serviClien.mostrarClientes().subscribe(data=>{
      this.selArrClie=data
    })
  }

}
