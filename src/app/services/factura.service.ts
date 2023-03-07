import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura'

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<any> {
    return this.http.get(this.url + '/facturas');
  }

  guardarFactura(factura: Factura): Observable<any> {
    return this.http.post(this.url + '/crear-factura', factura);
  }
  obtenerFactura(id: string): Observable<any> {
    return this.http.get(this.url + '/crear-factura' + id);
  }
}
