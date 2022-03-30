import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipoPlatillosService } from '../servicios/tipo-platillos.service';
import Swal from 'sweetalert2'
import { TipoPlatillos, TipoPlatillosEl } from '../modelos/tipo-platillos';
import { Location } from '@angular/common';


@Component({
  selector: 'app-tipo-platillos',
  templateUrl: './tipo-platillos.component.html',
  styleUrls: ['./tipo-platillos.component.css']
})
export class TipoPlatillosComponent implements OnInit {

  tplatForm!:FormGroup;
  tp!:TipoPlatillos;
  tiplarr!: TipoPlatillosEl[];

  constructor(
    private tpv:FormBuilder, 
    private servi:TipoPlatillosService,
    private goback:Location,
    ) { }

  ngOnInit(): void {
    this.tplatForm = this.tpv.group({
      nombre:["",[Validators.required]]
    })
    this.mostrarTiposPlatillos();
  }
  setPlat():void {
    this.tp = {
      nombre:this.tplatForm.get('tipo_platillo')?.value
    }
  }
  registrar_tipo_plat():void{

    this.setPlat();
    console.log(this.tplatForm.value);

    this.servi.registrarTipoPlat(this.tplatForm.value).subscribe((data: any)=>{
      console.log(data);
      //setItem, es para darle el valor a la variable que esta entre comillas
      Swal.fire({
        position: 'center',
        icon: 'success', 
        title: 'Se agrego exitosamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.mostrarTiposPlatillos();
      this.tplatForm.reset()

    },error =>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'No se pudo agregar',
      })
    })

  }
  regresar():void{
    this.goback.back();
  }
  mostrarTiposPlatillos(): void{
    this.servi.mostrarTipoPLatillos().subscribe(data=>{
      console.log(data)
      this.tiplarr = data
    })
  }
  eliminarTiposPlatillos(tipl:TipoPlatillosEl): void{
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
    window.alert('Se elimino correctamente');
    this.tiplarr = this.tiplarr.filter(b => b !== tipl);
    this.servi.deleteTipoPlat(tipl.id).subscribe();
    } 

  }
}
