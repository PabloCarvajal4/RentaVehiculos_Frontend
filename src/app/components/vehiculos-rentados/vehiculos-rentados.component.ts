import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { Rentado } from 'src/app/models/rentado';
import { RentadosService } from 'src/app/services/rentados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehiculos-rentados',
  templateUrl: './vehiculos-rentados.component.html',
  styleUrls: ['./vehiculos-rentados.component.css']
})
export class VehiculosRentadosComponent {
  listProductos: Rentado[] = [];
  
  constructor(private _rentadosService: RentadosService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos() {
    this._rentadosService.getVehiculos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

}
