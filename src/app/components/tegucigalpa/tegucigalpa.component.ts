import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { RentadosService } from 'src/app/services/rentados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tegucigalpa',
  templateUrl: './tegucigalpa.component.html',
  styleUrls: ['./tegucigalpa.component.css']
})
export class TegucigalpaComponent implements OnInit {
  vehiculoForm: FormGroup;
  titulo = 'renta';
  id: string | null;
  listProductos: Vehiculo[] = [];
  
  filterPost = 'Tegucigalpa';
  filterVehiculo ='';
  constructor(private _vehiculoService: VehiculosService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) 
    { 
      this.vehiculoForm = this.fb.group({
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      transmision: ['', Validators.required],
      color: ['', Validators.required],
      tipo: ['', Validators.required],
      zona: ['', Validators.required],
      tiempoRenta: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  

  ngOnInit(): void {
    this.obtenerVehiculos();
    this.esEditar();
  }

  obtenerVehiculos() {
    this._vehiculoService.getVehiculos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarVehiculo(id: any) {
    this._vehiculoService.eliminarVehiculo(id).subscribe(data => {
      console.log('El producto fue eliminado con exito' ,'Producto Eliminado');
      this.obtenerVehiculos();
    }, error => {
      console.log(error);
    })
  }

  esEditar() {

    if(this.id !== null) {
      
      this._vehiculoService.obtenerVehiculo(this.id).subscribe(data => {
        this.vehiculoForm.setValue({
          placa: data.placa,
          marca: data.marca,
          modelo: data.modelo,
          anio: data.anio,
          transmision: data.transmision,
          color: data.color,
          tipo: data.tipo,
          zona: data.zona,
          tiempoRenta: data.tiempoRenta,
          fechaInicio: data.fechaInicio,
          fechaFinal: data.fechaFinal,
        })
      })
    }
  }
}
