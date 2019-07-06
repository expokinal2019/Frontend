import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = 'expo@kinal.org';
  public password: string;
  private _success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage(x: string) {
    this._success.next(``);
  }

  constructor(private router: Router, public auth: AuthenticationService) { }

  public login() {
    this.auth.login(this.email, this.password).subscribe(response => {
      if (response.foundUser && response.token) {
        var x = new User(
          response.foundUser._id,
          response.foundUser.name,
          response.foundUser.username,
          response.foundUser.email,
          response.token
        );
        localStorage.setItem('currentUser', JSON.stringify(x));

        this.router.navigate(['']);
      } else {
        this.changeSuccessMessage(response.error.message);
      }
    }, err => {
      console.log(err);
      this.changeSuccessMessage(err.error.message);
    }); 
  }

}
