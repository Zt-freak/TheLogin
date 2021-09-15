import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup: FormGroup;

  username: FormControl;
  password: FormControl;

  isValid: boolean = true;

  constructor() {
    this.username = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.loginFormGroup = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  onSubmit() {
    if (
      this.username.value === "test" &&
      this.password.value === "helloworld!#"
    ) {
      window.location.href = "/";
    }
    else {
      this.isValid = false;
    }
  }

  ngOnInit(): void {
  }

}
