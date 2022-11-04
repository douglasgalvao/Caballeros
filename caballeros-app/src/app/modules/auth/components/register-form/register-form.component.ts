import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
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
    private router: Router
  ) { }

  onSubmit(): void {
    this.registred = true;
    try {

      this.httpClient.get(environment.apiUrl.concat("/cliente/exist/" + this.formRegister.value.email)).subscribe(retorno => {

        if (retorno) {
          this.emailInUse = true;
          return;
        }
        this.httpClient.post(environment.apiUrl.concat("/cliente/save"), this.formRegister.value).subscribe((retorno: any) => {
          this.router.navigate(["/auth/login"]);
        })
      });
    } catch (e: any) {
      throw e.toString();
    }
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
