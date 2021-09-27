import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-issue-form',
  templateUrl: './new-issue-form.component.html',
  styleUrls: ['./new-issue-form.component.css']
})
export class NewIssueFormComponent implements OnInit {

  departments: string[] = ["Department 1","Department 2","Department 3","Department 4","Department 5",];
  userData: any = {};

  constructor(private issueService: DataService) { }

  ngOnInit(): void {
  }

  submit(data: NgForm){
    this.userData = data;
    const newUser: any = {title: this.userData.title, description: this.userData.description, department: this.userData.department,
      status: this.userData.status, severity: this.userData.severity, createdBy: "admin"};
    this.issueService.saveIssue(newUser);
    location.assign("http://localhost:4200/");
  }

}
