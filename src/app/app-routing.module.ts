import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { AuthGuard } from './service/guard/auth-guard';
import { HomeGuard } from './service/guard/home-guard';

const routes: Routes = [
  {path: "login", component: LoginComponent, canActivate: [AuthGuard]},
  {path: "home", component: HomeComponent, canActivate: [HomeGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
