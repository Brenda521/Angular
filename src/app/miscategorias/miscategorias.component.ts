import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../modelos/tipo-platillos';
import { TipoPlatillosService } from '../servicios/tipo-platillos.service';
import {interval, timer} from 'rxjs'


@Component({
  selector: 'app-miscategorias',
  templateUrl: './miscategorias.component.html',
  styleUrls: ['./miscategorias.component.css']
})
export class MiscategoriasComponent implements OnInit {

  arrcat!: Categoria[];
  titulo!: string;
  constructor(private servi:TipoPlatillosService, private rut:ActivatedRoute) { }

  miInterval: any;

  ngOnInit(): void {
    this.miInterval = setInterval(() => {
      console.log("ola")
    }, 500);
    this.mostraCate();
  }

  ngOnDestroy() {
    if (this.miInterval) {
      clearInterval(this.miInterval);
    }
  }

  mostraCate():void{ 
    const id = Number(this.rut.snapshot.paramMap.get('id'));
    this.servi.mostrarCategoria(id).subscribe(data=>{
      this.titulo = data[0].nombre_tipo;
      this.arrcat = data
    })
  }
}
