import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(config: NgbAccordionConfig, private router: Router, public auth: AuthenticationService) {
    config.closeOthers = true;
    config.type = 'expoprimary';
  }

  navigateTo(to) {
    this.router.navigate([to]);
  }

  public logout() {
    this.auth.logout()
    this.router.navigate([''])
  }

  public registro() {
    this.router.navigate(['sign-up'])
  }
}
