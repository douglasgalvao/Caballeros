import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public formRegister!: FormGroup
  public registred!: Boolean;
  public emailInUse!: Boolean;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private storage: LocalStorageService
  ) { }

  onSubmit(): void {
    this.registred = true;
    this.httpClient.get(environment.apiUrl.concat("/cliente/exist" + this.formRegister.value)).subscribe(retorno => {
      if (retorno) {
        this.emailInUse;
        return;
      }
      this.httpClient.post(environment.apiUrl.concat("/cliente/save"), this.formRegister.value).subscribe((retorno:any) => {
        this.storage.set("token",retorno.token,30*60);
        this.router.navigate(["/auth/login"]);
      })
    });
  }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.formRegister = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      numero: ["", [Validators.required]]
    })
  }
  get c() {
    return this.formRegister.controls;
  }

}
