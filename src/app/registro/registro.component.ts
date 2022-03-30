import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuarios } from '../modelos/usuarios';
import { UsuaService } from '../servicios/usua.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { CargosService } from '../services/cargos.service';
import { Cargo } from '../models/cargo';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  ListaCargos: Cargo[] = [];
  idCargo: number = 0;

  constructor(private miService:UsuaService, 
    private router: Router, 
    private cargosService: CargosService) { }

  ngOnInit(): void {
    this.cargarCargo()
  }

  miFormulario = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get f(): { [key: string]: AbstractControl} {return this.miFormulario.controls; }
  store(){
    if (this.miFormulario.valid){
      const miRequest = {
        'email':this.f['email'].value, 
        'password':this.f['password'].value,
        'cargo':this.idCargo
      }
      console.log(miRequest);
      this.miService.register(miRequest).subscribe({
          next: () => [console.log("Usuario creado"), alert("Usuario creado correctamente") ,this.router.navigate(['/login'])],
          error: (e) => [console.error(e)],
          complete: () => console.info('complete') 
      })
    }else {
      console.log("Formulario inválido");
    }
  }

  cargarCargo(){
    this.cargosService.index().subscribe({
      next: (r) => [
      console.log(r),
      this.ListaCargos = r
    ],
      error: (e) => [console.error(e)],
      complete: () => console.info('complete') 
    })
  }

  selectCargo(cargo: Cargo){
    this.idCargo = cargo.id
  }


}
