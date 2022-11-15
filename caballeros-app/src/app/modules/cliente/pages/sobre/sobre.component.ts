import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/modules/auth/auth.service';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})

export class SobreComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.authService.verifyIsLogged().subscribe((e: any) => { }, (error => {
      this.cookieService.delete('token');
      this.router.navigate(["/auth/login"]);
    }));
  }

}
