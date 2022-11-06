import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public optionsClicked: boolean = false;
  public isLoggedIn: boolean = false;
  public loginout!: String;
  constructor(
    private cookieService:CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut():void{
    this.cookieService.delete("token");
    this.router.navigate(["auth/login"]);
  }
  setTrueClick(): void { this.optionsClicked = true; }
  setfalseClick(): void { this.optionsClicked = false; }

}
