import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  message: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  submit() {
    this.loginService.authenticate(this.user.username, this.user.password).subscribe(
      (response) => {
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("user", this.user.username);
        this.router.navigate(['/home']);
      },
      (err) => {
        console.log(err);
        this.message = "Wrong credentials";
      }
    );
  }

  ngOnInit(): void {
  }

}
