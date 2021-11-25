import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private login: LoginService, private router: Router){}

  canActivate() {
    if (!this.login.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return this.login.isLoggedIn();
  }
  
}