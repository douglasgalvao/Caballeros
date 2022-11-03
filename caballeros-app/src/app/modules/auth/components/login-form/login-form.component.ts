import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public formEmail!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitlogin() {
    console.log(this.httpClient.post(environment.apiUrl.concat("/login"), this.formEmail.value)
      .subscribe(res => {
        console.log(res);
      }));
  }


  private initForm(): void {
    this.formEmail = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }
}
