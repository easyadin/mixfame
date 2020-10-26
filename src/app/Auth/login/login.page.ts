import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) { }

  email = ""

  password = ""

  isActive = false;

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    this.email = loginForm.value.email
    this.password = loginForm.value.password;
  }

  emailChanged(event) {
    if (event.target.value != "") this.isActive = true;
    else this.isActive = false
  }

  onSuccces() {
    if (this.password != "") {
      this.router.navigateByUrl('/home')
    }
  }
}
