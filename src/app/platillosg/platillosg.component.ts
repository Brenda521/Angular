import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';
import { PlatilloserService } from '../servicios/platilloser.service';
import { Platillos, PlatillosEl } from '../modelos/platillos';
import { TipoPlatillos, TipoPlatillosEl } from '../modelos/tipo-platillos';
import { TipoPlatillosService } from '../servicios/tipo-platillos.service';
import {interval, timer} from 'rxjs'


@Component({
  selector: 'app-platillosg',
  templateUrl: './platillosg.component.html',
  styleUrls: ['./platillosg.component.css']
})
export class PlatillosgComponent implements OnInit {


  platForm!:FormGroup;
  plat!:PlatillosgComponent;
  platarr!: PlatillosEl[];
  selArrPlat!:TipoPlatillosEl[];

  constructor(private pv:FormBuilder, private servi:PlatilloserService,
    private goback:Location, private serviTip:TipoPlatillosService) {

   }

  ngOnInit(): void {

    this.platForm = this.pv.group({
      nombre:["",[Validators.required]],
      precio:["",[Validators.required]],
      tipo_plato:["",Validators.required]
    })
    this.mostrarPlatillos()
    this.getTipoPlatillo()
    
  }
  setPlatillo():void {
    this.plat
  }
  
  registrarPlat():void{

    this.setPlatillo();
    console.log(this.platForm.value);

    this.servi.registrarPlat(this.platForm.value).subscribe((data: any)=>{
      console.log(data);
      //setItem, es para darle el valor a la variable que esta entre comillas
      //localStorage.setItem("token",data.token);
      Swal.fire({
        position: 'center',
        icon: 'success', 
        title: 'Se registro correctamente',
        showConfirmButton: false,
        timer: 1500
      });
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
  mostrarPlatillos(): void{
    this.servi.mostrarPLatillos().subscribe(data=>{
      console.log(data)
      this.platarr = data
    })
  }
  eliminarPlatillos(pl:number): void{
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
    window.alert('Se elimino correctamente');
    //this.platarr = this.platarr.filter(b => b !== pl);
    this.servi.deletePlat(pl).subscribe();
    } 

  }
  //UN SELECT DINAMICO
  getTipoPlatillo():void{
    this.serviTip.mostrarTipoPLatillos().subscribe(data=>{
      this.selArrPlat=data
    })
  }

}
