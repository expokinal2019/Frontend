import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(config: NgbAccordionConfig, private router: Router) {
    config.closeOthers = true;
    config.type = 'expoprimary';
  }

  navigateTo(to) {
    this.router.navigate([to]);
  }
}
