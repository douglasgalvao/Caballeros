import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public formEmail!: FormGroup;
  private err!: Boolean;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  async onSubmitlogin() {
    try {
      this.httpClient
        .post(environment.apiUrl.concat('/login'), this.formEmail.value)
        .subscribe((res: any) => {
          this.cookieService.set('token', res.token, 60 * 30 * 30);
          this.router.navigate(['/cliente/sobre']);
        });
    } catch (e: any) {
      this.err = true;
      throw e;
    }
  }

  private initForm(): void {
    this.formEmail = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
