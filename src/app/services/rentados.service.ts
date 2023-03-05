import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rentado } from '../models/rentado'

@Injectable({
  providedIn: 'root'
})
export class RentadosService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<any> {
    return this.http.get(this.url + '/rentados');
  }

  guardarVehiculo(rentado: Rentado): Observable<any> {
    return this.http.post(this.url + '/rentados', rentado);
  }

  obtenerVehiculo(id: string): Observable<any> {
    return this.http.get(this.url + '/rentados' + id);
  }
}
