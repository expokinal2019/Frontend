import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed=true;

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-right';
    config.autoClose = true;
  }

  ngOnInit() {
  }

}
