import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public optionsClicked: boolean = false;
  public isLoggedIn: boolean = false;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  setTrueFalse(): void {
    this.optionsClicked = !this.optionsClicked;
  }

  logOut(): void {
    this.authService.logOut();
  }

}
