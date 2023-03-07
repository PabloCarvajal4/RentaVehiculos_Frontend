import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {
  vehiculoForm: FormGroup;
  titulo = 'Facturación';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _facturaService: FacturaService,
              private _vehiculoService: VehiculosService,
              private aRouter: ActivatedRoute,
              private toastr: ToastrService ) { 
    this.vehiculoForm = this.fb.group({
      dniCliente: ['', Validators.required],
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      total: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarVehiculo() {

    const PRODUCTO: Factura = {
      dniCliente: this.vehiculoForm.get('dniCliente')?.value,
      nombre: this.vehiculoForm.get('nombre')?.value,
      placa: this.vehiculoForm.get('placa')?.value,
      marca: this.vehiculoForm.get('marca')?.value,
      modelo: this.vehiculoForm.get('modelo')?.value,
      fechaInicio: this.vehiculoForm.get('fechaInicio')?.value,
      fechaFinal: this.vehiculoForm.get('fechaFinal')?.value,
      total: this.vehiculoForm.get('total')?.value,
    }

    console.log(PRODUCTO);
    this._facturaService.guardarFactura(PRODUCTO).subscribe(data => {
      this.toastr.success('El vehículo fue rentado exitosamente!', 'Vehículo Registrado!');
      this.router.navigate(['/crear-factura']);
    }, error => {
      this.toastr.error('No se puedo rentar el vehículo','Error')
      console.log(error);
      this.vehiculoForm.reset();
    })

  
  }
  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Rentar Vehículo';
      this._facturaService.obtenerFactura(this.id).subscribe(data => {
        this.vehiculoForm.setValue({
          dniCliente: data.dniCliente,
          nombre: data.nombre,
          marca: data.marca,
          modelo: data.modelo,
          fechaInicio: data.fechaInicio,
          total: data.total,
          fechaFinal: data.fechaFinal,
        })
      })
    }
  }
}