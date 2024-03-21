import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],

  providers: [LoginService],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'] 
  
})

export class SignUpComponent {
  signupForm!: FormGroup<SignupForm>;
  
  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService // Injete o ToastrService
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  } 

  async Submit() {
    try {
      const response = await this.loginService.login(this.signupForm.value.email, this.signupForm.value.password);
      this.toastService.success("Cadastro feito com sucesso!");
    } catch (error) {
      this.toastService.error("Error, tente novamente!");
    }
  }
  

  navigate(){
    this.router.navigate(['login'])
  }
 
}
