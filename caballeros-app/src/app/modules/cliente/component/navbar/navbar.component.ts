import { Component, OnInit } from '@angular/core';

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

  ) { }

  ngOnInit(): void {
  }

  logOut():void{

  }
  setTrueClick(): void { this.optionsClicked = true; }
  setfalseClick(): void { this.optionsClicked = false; }

}
