import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/modelos/clientesa';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-actualizarcliente',
  templateUrl: './actualizarcliente.component.html',
  styleUrls: ['./actualizarcliente.component.css']
})
export class ActualizarclienteComponent implements OnInit {

  clieactForm!: FormGroup;
  cliente!: Cliente;

  constructor(private vd:FormBuilder ,private servi:ClienteService,private goback:Location,private rut:ActivatedRoute) { }

  ngOnInit(): void {
    this.clieactForm = this.vd.group({
      nombre:["",[Validators.required,Validators.minLength(2)]],
      apellidos:["",[Validators.required,Validators.minLength(2)]],
      telefono:["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
    })
  }
  setClienAct(): void{

    this.cliente = {
      nombre:this.clieactForm.get('nombre')?.value,
      apellidos:this.clieactForm.get('apellido')?.value,
      telefono:this.clieactForm.get('telefono')?.value,   
    }
  }
  regresar():void{
    this.goback.back();
  }
  actualizar():void{
    const id = Number(this.rut.snapshot.paramMap.get('id'));
    this.setClienAct();
    this.servi.updateCliente(id,this.clieactForm.value).subscribe(()=> this.regresar())
  }

}
