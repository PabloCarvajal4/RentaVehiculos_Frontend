import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura';
import { FacturaService } from 'src/app/services/factura.service';
import { RentadosService } from 'src/app/services/rentados.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService} from '../../services/auth.service'

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  user = {
    password:''
  }
  titulo = 'Facturas';
  listProductos: Factura[] = [];
  
  filterPost = '.'
  filterVehiculo ='';
  constructor(private _facturaService: FacturaService,
    private fb: FormBuilder,
    private router: Router,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService,
    private authService: AuthService) 
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

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          this.toastr.success('Bienvenido!');
          console.log(res);    
          localStorage.setItem('token', res.token); 
          this.router.navigate(['/home']);
        },
        err => this.toastr.error('Credenciales Incorrectas','Error de Inicio de sesión')
               
      )
  }

  
  
}

