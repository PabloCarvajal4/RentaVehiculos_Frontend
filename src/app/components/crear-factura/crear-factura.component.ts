import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rentado} from 'src/app/models/rentado'
import { RentadosService } from 'src/app/services/rentados.service';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { ToastrService } from 'ngx-toastr';
import { animation } from '@angular/animations';
import { ZonasPipe } from 'src/app/pipes/zonas.pipe';
import { Vehiculo } from 'src/app/models/vehiculo';


@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})

export class CrearFacturaComponent implements OnInit {
  tiempoRenta!: number;
  val2!: number;
  rta!: number;

Operacion(){
this.rta=this.tiempoRenta*1000;
}
  vehiculoForm: FormGroup;
  titulo = 'Facturación';
  id: string | null;
  resp:number | undefined;
  listProductos: Vehiculo[] = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private _facturaService: FacturaService,
              private _rentadoService: RentadosService,
              private _vehiculoService: VehiculosService,
              private aRouter: ActivatedRoute,
              private toastr: ToastrService,
             ) { 
    this.vehiculoForm = this.fb.group({
      dniCliente: ['', Validators.required],
      nombre: ['', Validators.required],
      placa: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFinal: ['', Validators.required],
      total: ['', Validators.required],

      anio : ['', Validators.required],
      transmision: ['', Validators.required],
      color : ['', Validators.required],
      tipo: ['', Validators.required],
      zona : ['', Validators.required],
      tiempoRenta: ['', Validators.required],
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
      this.router.navigate(['/home']);
    }, error => {
      this.toastr.error('No se puedo rentar el vehículo','Error')
      console.log(error);
      this.vehiculoForm.reset();
    })

    const VEHICULO: Rentado = {
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

    console.log(VEHICULO);
    this._rentadoService.guardarVehiculo(VEHICULO).subscribe(data => {
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
      this._vehiculoService.obtenerVehiculo(this.id).subscribe(data => {
        this.vehiculoForm.setValue({
          placa: data.placa,
          marca: data.marca,
          modelo: data.modelo,
          anio: data.anio,
          transmision: data.transmision,
          color : data.color,
          tipo : data.tipo,
          zona: data.zona
        })
      })
    }
  }

  eliminarVehiculo(id: any) {
    this._vehiculoService.eliminarVehiculo(id).subscribe(data => {
      console.log('El producto fue eliminado con exito' ,'Producto Eliminado');
    }, error => {
      console.log(error);
    })
  }

}
