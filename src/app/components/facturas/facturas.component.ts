import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { RentadosService } from 'src/app/services/rentados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  titulo = 'Facturas';
  listProductos: Factura[] = [];
  
  filterPost = 'pablo ';
  filterVehiculo ='';
  constructor(private _facturaService: FacturaService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService) 
    { 
     
  }
  ngOnInit(): void {
    this.obtenerFacturas();
  }

  obtenerFacturas() {
    this._facturaService.getFacturas().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }



  
  
}

