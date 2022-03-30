import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Cliente, Clientesa } from '../modelos/clientesa';
import { ClienteService } from '../servicios/cliente.service';
import Swal from 'sweetalert2'
import { Location } from '@angular/common';
import {interval, timer} from 'rxjs'



@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clienForm!: FormGroup;
  clien!: Cliente;
  clientearr!: Clientesa[]; 

  constructor(private vd:FormBuilder ,private servi:ClienteService,private goback:Location,
    ) { }

  ngOnInit(): void {

    this.clienForm = this.vd.group({
      nombre:["",[Validators.required,Validators.minLength(2)]],
      apellidos:["",[Validators.required,Validators.minLength(2)]],
      telefono:["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
    })
    const contador = interval(1000)
    contador.subscribe(() =>{
    this.mostrarLosClientes();
    })

  }
  setClien(): void{

    this.clien = {
      nombre:this.clienForm.get('nombre')?.value,
      apellidos:this.clienForm.get('apellido')?.value,
      telefono:this.clienForm.get('telefono')?.value,   
    }
    
  }  
  registrar():void{

    this.setClien();
    console.log(this.clienForm.value);

    this.servi.agregar(this.clienForm.value).subscribe((data: any)=>{
      next: ()=> [this.mostrarLosClientes()]
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
        title: 'No estas registrado',
      })
    })

  }

  regresar():void{
    this.goback.back();
  }

  mostrarLosClientes(): void{
    this.servi.mostrarClientes().subscribe(data=>{
      this.clientearr = data
    })
  }
  eliminarCliente(cliente:Clientesa): void{
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
    window.alert('Se elimino correctamente');
    this.clientearr = this.clientearr.filter(b => b !== cliente);
    this.servi.deleteCliente(cliente.id).subscribe({
      next: ()=> [this.mostrarLosClientes()]
    });
    } 

  }
}


