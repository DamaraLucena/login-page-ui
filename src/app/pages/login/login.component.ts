import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],

  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
  
})

export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService

  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  } 

  async Submit() {
    try {
      const response = await this.loginService.login(this.loginForm.value.email, this.loginForm.value.password);
      this.toastService.success("Login feito com sucesso!");
    } catch (error) {
      this.toastService.error("Error, tente novamente!");
    }
  }
  
  navigate(){
    this.router.navigate(["signup"]);
  } 
}
