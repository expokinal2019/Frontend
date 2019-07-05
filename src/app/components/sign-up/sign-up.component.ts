import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public email: string;
  public name: string;
  public username: string;
  public password: string;
  private _success = new Subject<string>();

  staticAlertClosed = false;
  message: string;

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.message = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.message = null);
  }

  constructor(public router: Router,public auth: AuthenticationService) { }

  public changeSuccessMessage(x: string) {
    this._success.next(x);
  }

  public signUp() {
    this.auth.signUp(this.email, this.password, this.name, this.username).subscribe(
      response => {
        if (response.user) {
        } else {
          this.changeSuccessMessage(response.error.message || 'Ocurrio un error :(')
        }
      }, err => {
        console.log(err)
        this.changeSuccessMessage(err.error.message || 'Ocurrio un error :(')
      }
    );
  }

}
