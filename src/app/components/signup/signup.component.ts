import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe(
        res => {
          this.toastr.success('Usuario registrado exitosamente!' );
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/signin']);
        },
        err => console.log(err)
      )
  }
}
