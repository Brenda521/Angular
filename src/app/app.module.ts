import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HomechefComponent } from './homechef/homechef.component';
import { HomecajeroComponent } from './homecajero/homecajero.component';
import { HomerecepcionistaComponent } from './homerecepcionista/homerecepcionista.component';

import { ReactiveFormsModule } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';
import { NavbarComponent } from './navbar/navbar.component';
import { PostreComponent } from './postre/postre.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { PlatosFuertesComponent } from './platos-fuertes/platos-fuertes.component';
import { EntradasComponent } from './entradas/entradas.component';
import { ActualizarpostreComponent } from './MisCruds/nombre-tabla/actualizarpostre/actualizarpostre.component';
import { AgregarpostreComponent } from './MisCruds/nombre-tabla/agregarpostre/agregarpostre.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PlatillosgComponent } from './platillosg/platillosg.component';
import { TipoPlatillosComponent } from './tipo-platillos/tipo-platillos.component';
import { MesasComponent } from './mesas/mesas.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { MiscategoriasComponent } from './miscategorias/miscategorias.component';
import { ActualizarclienteComponent } from './actualizar/actualizarcliente/actualizarcliente.component';
import { ActualizarplatillosComponent } from './actualizar/actualizarplatillos/actualizarplatillos.component';
import { ActualizarreservacionesComponent } from './actualizar/actualizarreservaciones/actualizarreservaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    HomechefComponent,
    HomecajeroComponent,
    HomerecepcionistaComponent,
    NavbarComponent,
    PostreComponent,
    BebidasComponent,
    PlatosFuertesComponent,
    EntradasComponent,
    ActualizarpostreComponent,
    AgregarpostreComponent,
    ClientesComponent,
    PlatillosgComponent,
    TipoPlatillosComponent,
    MesasComponent,
    ReservacionesComponent,
    MiscategoriasComponent,
    ActualizarclienteComponent,
    ActualizarplatillosComponent,
    ActualizarreservacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
