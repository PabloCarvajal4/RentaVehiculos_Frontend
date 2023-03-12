import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { SpsComponent } from './components/sps/sps.component';
import { TegucigalpaComponent } from './components/tegucigalpa/tegucigalpa.component';
import { RentaComponent } from './components/renta/renta.component';
import { VehiculosRentadosComponent } from './components/vehiculos-rentados/vehiculos-rentados.component';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { FacturasComponent } from './components/facturas/facturas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'progreso',
    component: ProgresoComponent
  },
  {
    path: 'sps',
    component: SpsComponent
  },
  {
    path: 'tegucigalpa',
    component: TegucigalpaComponent
  },
  {
    path: 'renta/:id',
    component: RentaComponent
  },
  {
    path: 'rentados',
    component: VehiculosRentadosComponent
  },
  {
    path: 'crear-factura/:id',
    component: CrearFacturaComponent
  },
  {
    path: 'facturas',
    component: FacturasComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
