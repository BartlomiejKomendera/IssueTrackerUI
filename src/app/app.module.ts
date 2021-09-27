import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuesComponent } from './issues/issues.component';
import { IssueComponent } from './issues/issue/issue.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewIssueFormComponent } from './new-issue-form/new-issue-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IssuesComponent,
    IssueComponent,
    NewIssueFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
