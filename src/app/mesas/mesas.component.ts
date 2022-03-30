import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mesas, MesasEl } from '../modelos/mesas';
import { MesasService } from '../servicios/mesas.service';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';


@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  mesaForm!: FormGroup;
  me!: Mesas;
  mearr!: MesasEl[];

  constructor(
    private mvd:FormBuilder,
    private servi:MesasService,
    private goback:Location,
  ) { }

  ngOnInit(): void {
    this.mesaForm = this.mvd.group({
      num_mesa:["",[Validators.required]]
    })
    this.mostrarMesas();

  }

  setMes():void {
    //lo que esta entre los parentesis es el input
    this.me = {
      num_mesa:this.mesaForm.get('num_mesa')?.value
    }
  }
  registrarMesa():void{

    this.setMes();
    console.log(this.mesaForm.value);

    this.servi.registrarMesa(this.mesaForm.value).subscribe((data: any)=>{
      console.log(data);
      //setItem, es para darle el valor a la variable que esta entre comillas
      Swal.fire({
        position: 'center',
        icon: 'success', 
        title: 'Se agrego exitosamente',
        showConfirmButton: false,
        timer: 1500
      });
      this.mostrarMesas();
      this.mesaForm.reset()

    },error =>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'No se pudo agregar',
      })
    })

  }
  mostrarMesas(): void{
    this.servi.mostrarMesas().subscribe(data=>{
      console.log(data)
      this.mearr = data
    })
  }

eliminarMesas(m:MesasEl): void{
  var resultado = window.confirm('Estas seguro?');
  if (resultado === true) {
  window.alert('Se elimino correctamente');
  this.mearr = this.mearr.filter(b => b !== m);
  this.servi.deleteMesas(m.id).subscribe();
  } 
}
regresar():void{
  this.goback.back();
}

}
