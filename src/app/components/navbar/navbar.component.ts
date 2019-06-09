import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'expoprimary';
  }

  ngOnInit() {
  }

}
