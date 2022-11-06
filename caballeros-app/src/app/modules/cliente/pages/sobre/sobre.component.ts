import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
  constructor(private router: Router, private cookieService: CookieService) {}

  verifyIsLogged() {
    if(!this.cookieService.get('token')){

      this.router.navigate(['auth/login']);
    }
  }

  ngOnInit(): void {
    this.verifyIsLogged();
  }
}
