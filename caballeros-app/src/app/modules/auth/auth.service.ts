import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public emailInUse!: Boolean;
  public registred!: Boolean;
  public formRegister!: FormGroup;
  constructor(private httpClient: HttpClient, private cookieService: CookieService,
    private router: Router, private formBuilder: FormBuilder) {

  }

  verifyIsLogged(): Observable<boolean> {
    let myToken = this.cookieService.get('token'); 1
    if (!myToken) {
      this.router.navigate(['auth/login']);
    }

    let headers = new HttpHeaders({
      'Content-Type': "application/json",
      'Authorization': this.cookieService.get('token')
    });
    return this.httpClient.get<boolean>(environment.apiUrl.concat('/cliente/verifyifclientexist'), {
      headers: headers
    })
  }

  onSubmit(): void {
    this.registred = true;
    try {
      this.httpClient.post(environment.apiUrl.concat("/cliente/saveCliente"), this.formRegister.value).subscribe((retorno: any) => {
        this.router.navigate(["/auth/login"]);
      })
    } catch (e: any) {
      throw e.toString();
    }
  }

  logOut(): void {
    this.cookieService.delete('token');
    this.router.navigate(['auth/login']);
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
