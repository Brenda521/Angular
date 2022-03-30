import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logeo } from '../modelos/logearse';
import { UsuaService } from '../servicios/usua.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'Login';

  loginForm!: FormGroup;
  logs! : Logeo;

  constructor(private logvd:FormBuilder,private servi: UsuaService, private ruta:Router) { }

  ngOnInit(): void {

    this.loginForm = this.logvd.group({
      correo:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]],
    })

  }

  setLogueo(): void{

    this.logs = {

      email:this.loginForm.get('correo')?.value,
      password:this.loginForm.get('password')?.value    }
    
  }

  login():void{

    this.setLogueo();
    console.log(this.loginForm.value);

    this.servi.logueo(this.logs).subscribe((data: any)=>{
      console.log(data);
      //setItem, es para darle el valor a la variable que esta entre comillas
      localStorage.setItem("token",data.token);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenido (a)',
        showConfirmButton: false,
        timer: 1500
      });this.ruta.navigate(['/home'])
    },error =>{
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'No estas registrado',
      })
    })


  }

}
