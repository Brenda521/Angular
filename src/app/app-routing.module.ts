import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarclienteComponent } from './actualizar/actualizarcliente/actualizarcliente.component';
import { ActualizarplatillosComponent } from './actualizar/actualizarplatillos/actualizarplatillos.component';
import { ActualizarreservacionesComponent } from './actualizar/actualizarreservaciones/actualizarreservaciones.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { EntradasComponent } from './entradas/entradas.component';
import { GuardunoGuard } from './guards/guarduno.guard';
import { HomeComponent } from './home/home.component';
import { HomecajeroComponent } from './homecajero/homecajero.component';
import { HomechefComponent } from './homechef/homechef.component';
import { HomerecepcionistaComponent } from './homerecepcionista/homerecepcionista.component';
import { LoginComponent } from './login/login.component';
import { MesasComponent } from './mesas/mesas.component';
import { MiscategoriasComponent } from './miscategorias/miscategorias.component';
import { PlatillosgComponent } from './platillosg/platillosg.component';
import { PlatosFuertesComponent } from './platos-fuertes/platos-fuertes.component';
import { PostreComponent } from './postre/postre.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { TipoPlatillosComponent } from './tipo-platillos/tipo-platillos.component';

const routes: Routes = [
  {path : 'login',component: LoginComponent},
  {path : 'registro',component: RegistroComponent},

  {path : 'home',component: HomeComponent},

  {path : 'homecajero', component: HomecajeroComponent},
  {path : 'homechef', component: HomechefComponent},
  {path : 'homerecepcionista',component: HomerecepcionistaComponent},
  {path : 'postre',component: PostreComponent},
  {path : 'bebidas',component: BebidasComponent},
  {path : 'platos-fuertes',component: PlatosFuertesComponent},
  {path : 'entradas',component:EntradasComponent},
  //ADMIN
  {path : 'clientes',component:ClientesComponent,canActivate:[GuardunoGuard]},
  {path : 'tipo-platillos', component:TipoPlatillosComponent,canActivate:[GuardunoGuard]},
  {path : 'mesas',component:MesasComponent,canActivate:[GuardunoGuard]},
  {path : 'platillos',component:PlatillosgComponent,canActivate:[GuardunoGuard]},
  {path : 'reservaciones',component:ReservacionesComponent},
  {path : 'miscategorias/:id', component:MiscategoriasComponent},
  {path : 'actualizarcliente/:id',component:ActualizarclienteComponent,canActivate:[GuardunoGuard]},
  {path : 'actualizarplatillos/:id', component:ActualizarplatillosComponent,canActivate:[GuardunoGuard]},
  {path : 'actualizarreservaciones/:id',component:ActualizarreservacionesComponent,canActivate:[GuardunoGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }