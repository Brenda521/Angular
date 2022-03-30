import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../modelos/usuarios';
import { UsuaService } from '../servicios/usua.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  title = 'Registrar';

  registerForm!: FormGroup;
  user!: Usuarios;

  // para las validaciones
  constructor(private vd:FormBuilder,private servi: UsuaService) {

   }

  ngOnInit(): void {
  
    this.registerForm = this.vd.group({
/*    nombre:["",[Validators.required,Validators.minLength(3)]],
      apellido:["",[Validators.required,Validators.minLength(3)]],
      telefono:["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]], */
      correo:["",[Validators.required]],
      password:["",[Validators.required,Validators.minLength(8)]],
      //pass_conf:["",[Validators.required,Validators.minLength(8)]]
      cargo:["",[Validators.required]]
    })
  
  }

  register(): void{

    this.setUsuario();
    console.log(this.registerForm.value);
    this.servi.register(this.user).subscribe((data: any)=>{
      console.log("ya jala");
    },
    error =>{
      console.log(error);
    })
  }

  get ConfirmarPassword(){

    const contra = this.registerForm.get('password')?.value;
    const contra_conf = this.registerForm.get('pass_conf')?.value;
    return contra == contra_conf ? false : true;
  }

  setUsuario(): void{

    this.user = {
      /* nombre:this.registerForm.get('nombre')?.value,
      apellidos:this.registerForm.get('apellido')?.value,
      telefono:this.registerForm.get('telefono')?.value, */
      email:this.registerForm.get('correo')?.value,
      password:this.registerForm.get('password')?.value,
      //password_confirmation:this.registerForm.get('pass_conf')?.value
      cargo:this.registerForm.get('cargo')?.value
    }
    
  }
  registrar():void{

    this.setUsuario();
    console.log(this.registerForm.value);

    this.servi.register(this.user).subscribe((data: any)=>{
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
        title: 'No se puede registrar',
      })
    })


  }

}
