import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Clientesa } from 'src/app/modelos/clientesa';
import { MesasEl } from 'src/app/modelos/mesas';
import { Reservaciones } from 'src/app/modelos/reservaciones';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { MesasService } from 'src/app/servicios/mesas.service';
import { ReservacionesService } from 'src/app/servicios/reservaciones.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-actualizarreservaciones',
  templateUrl: './actualizarreservaciones.component.html',
  styleUrls: ['./actualizarreservaciones.component.css']
})
export class ActualizarreservacionesComponent implements OnInit {


  resactForm!: FormGroup;
  rese!: Reservaciones;
  selClien!: Clientesa[];
  selMesa!: MesasEl[];


  constructor(private rav:FormBuilder, 
    private servi:ReservacionesService,
    private goback:Location,
    private rut:ActivatedRoute,
    private serviC:ClienteService,
    private serviM:MesasService) { }

  ngOnInit(): void {
    this.resactForm = this.rav.group({
      fecha:["",[Validators.required]],
      id_cliente:["",[Validators.required]],
      id_mesa:["",[Validators.required]]
    });
    this.getTipoClien()
    this.getTipoMesa()
    
  }
  regresar():void{
    this.goback.back();
  }

  actualizar():void{
    const id = Number(this.rut.snapshot.paramMap.get('id'));
    this.servi.updateRes(id,this.resactForm.value).subscribe(()=> this.regresar())
  }
  getTipoClien():void{
    this.serviC.mostrarClientes().subscribe(data=>{
      this.selClien=data
    })
  }
  getTipoMesa():void{
    this.serviM.mostrarMesas().subscribe(data=>{
      this.selMesa=data
    })
  }

}
