import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    email:'',
    password:''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          this.toastr.success('Bienvenido!' );
          console.log(res);    
          localStorage.setItem('token', res.token); 
          this.router.navigate(['/home']);
        },
        err => this.toastr.error('Credenciales Incorrectas','Error de Inicio de sesión')
               
      )
  }

}