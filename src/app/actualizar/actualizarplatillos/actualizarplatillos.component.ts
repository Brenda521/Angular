import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Platillos, PlatillosEl } from 'src/app/modelos/platillos';
import { TipoPlatillosEl } from 'src/app/modelos/tipo-platillos';
import { PlatilloserService } from 'src/app/servicios/platilloser.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TipoPlatillosService } from 'src/app/servicios/tipo-platillos.service';


@Component({
  selector: 'app-actualizarplatillos',
  templateUrl: './actualizarplatillos.component.html',
  styleUrls: ['./actualizarplatillos.component.css']
})
export class ActualizarplatillosComponent implements OnInit {

  platact!: FormGroup;
  plati!: Platillos;
  selPlat!:TipoPlatillosEl[];

  constructor(private plv:FormBuilder ,
    private servi:PlatilloserService,
    private goback:Location,
    private rut:ActivatedRoute, 
    private serviTps:TipoPlatillosService) { }

  ngOnInit(): void {
    this.platact= this.plv.group({
      nombre:["",[Validators.required]],
      precio:["",[Validators.required]],
      tipo_plato:["",Validators.required]

    })
    this.getTipoPlatillo();
  }
  setPlatilloAct():void {
    this.plati = {
      nombre:this.platact.get('nombre')?.value,
      precio:this.platact.get('precio')?.value,
      tipo_plato:this.platact.get('tipo_plato')?.value,  
    }
  }
  getTipoPlatillo():void{
    this.serviTps.mostrarTipoPLatillos().subscribe(data=>{
      this.selPlat=data
    })
  }
  regresar():void{
    this.goback.back();
  }
  actualizar():void{
    const id = Number(this.rut.snapshot.paramMap.get('id'));
    this.setPlatilloAct();
    this.servi.updatePlat(id,this.platact.value).subscribe(()=> this.regresar())
  }

}
