import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rentado } from 'src/app/models/rentado';
import { RentadosService } from 'src/app/services/rentados.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {
  vehiculoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private _rentadoService: RentadosService,
              private aRouter: ActivatedRoute,
              private toastr: ToastrService ) { 
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
    this.esEditar();
  }

  agregarVehiculo() {

    const PRODUCTO: Rentado = {
      placa: this.vehiculoForm.get('placa')?.value,
      marca: this.vehiculoForm.get('marca')?.value,
      modelo: this.vehiculoForm.get('modelo')?.value,
      anio: this.vehiculoForm.get('anio')?.value,
      transmision: this.vehiculoForm.get('transmision')?.value,
      color: this.vehiculoForm.get('color')?.value,
      tipo: this.vehiculoForm.get('tipo')?.value,
      zona: this.vehiculoForm.get('zona')?.value,
      tiempoRenta: this.vehiculoForm.get('tiempoRenta')?.value,
      fechaInicio: this.vehiculoForm.get('fechaInicio')?.value,
      fechaFinal: this.vehiculoForm.get('fechaFinal')?.value,
    }

    console.log(PRODUCTO);
    this._rentadoService.guardarVehiculo(PRODUCTO).subscribe(data => {
      this.toastr.success('El vehículo fue rentado exitosamente!', 'Vehículo Registrado!');
      this.router.navigate(['/progreso']);
    }, error => {
      this.toastr.error('No se puedo rentar el vehículo','Error')
      console.log(error);
      this.vehiculoForm.reset();
    })

  
  }


  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Rentar Vehículo';
      this._rentadoService.obtenerVehiculo(this.id).subscribe(data => {
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
