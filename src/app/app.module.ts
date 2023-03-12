import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { SpsComponent } from './components/sps/sps.component';
import { ProgresoComponent } from './components/progreso/progreso.component';
import { TegucigalpaComponent } from './components/tegucigalpa/tegucigalpa.component';
import { RentaComponent } from './components/renta/renta.component';
import { VehiculosRentadosComponent } from './components/vehiculos-rentados/vehiculos-rentados.component';
import { ZonasPipe } from './pipes/zonas.pipe';
import { VehiculoPipe } from './pipes/vehiculo.pipe';
import { CrearFacturaComponent } from './components/crear-factura/crear-factura.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { FacturaPipe } from './pipes/factura.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    SpsComponent,
    ProgresoComponent,
    TegucigalpaComponent,
    RentaComponent,
    VehiculosRentadosComponent,
    ZonasPipe,
    VehiculoPipe,
    CrearFacturaComponent,
    FacturasComponent,
    FacturaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
