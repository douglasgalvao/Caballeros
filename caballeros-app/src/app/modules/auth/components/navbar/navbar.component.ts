import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public optionsClicked: boolean = false;
  public isLoggedIn: boolean = false;
  constructor(

  ) { }

  ngOnInit(): void {
  }


  setTrueFalse(): void {
    this.optionsClicked = !this.optionsClicked; }

}
