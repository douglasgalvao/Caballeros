import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.authService.verifyIsLogged().subscribe((e: any) => {},(error=>{this.router.navigate(["/auth/login"])}));
  }
}
