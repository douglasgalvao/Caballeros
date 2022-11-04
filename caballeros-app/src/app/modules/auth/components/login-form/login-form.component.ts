import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formEmail!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmitlogin() {
    this.httpClient.post(environment.apiUrl.concat("/login"), this.formEmail.value)
      .subscribe((res: any) => {
        this.cookieService.set("token", res.token);
        this.httpClient.post(environment.apiUrl.concat("/cliente/getPermission"),{token:this.cookieService.get("token")})
          .subscribe(retorno => {
            console.log(retorno)
          })
      });

  }


  private initForm(): void {
    this.formEmail = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }
}
