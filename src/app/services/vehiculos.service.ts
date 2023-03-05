import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})

export class VehiculosService {
  url = 'http://localhost:3000/api';
  

  constructor(private http: HttpClient) { }
  filtroZonas: '' = "";

  getVehiculos(): Observable<any> {
    return this.http.get(this.url + '/progreso');
  }

  guardarVehiculo(vehiculo: Vehiculo): Observable<any> {
    return this.http.post(this.url + '/progreso', vehiculo);
  }

  eliminarVehiculo(id: string): Observable<any> {
    return this.http.delete(this.url +  '/progreso/' + id);
  }
  
  obtenerVehiculo(id: string): Observable<any> {
    return this.http.get(this.url + '/progreso/' + id);
  }
}
