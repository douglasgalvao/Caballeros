import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  private erroAccessRoute!: Boolean;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private httpClient: HttpClient
  ) { }

  verifyIsLogged(): void {
    if (!this.cookieService.get('token')) {
      this.router.navigate(['auth/login']);
      return;
    }


    this.httpClient.post(environment.apiUrl.concat('/cliente/verifyifclientexist'), {}
      , {
        headers: {
          'Authorization': this.cookieService.get('token')
        }
      })
      .subscribe((e) => {
        if (!e) {
          this.erroAccessRoute = true;
          this.router.navigate(['auth/login']);
          return;
        }
      }, (error: any) => {
        this.router.navigate(['auth/login']);
      });
  }

  logOut(): void {
    this.cookieService.delete('token');
    this.router.navigate(['auth/login']);
  }

  ngOnInit(): void {
    this.verifyIsLogged();
  }
}
