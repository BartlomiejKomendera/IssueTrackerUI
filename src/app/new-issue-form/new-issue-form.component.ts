import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-issue-form',
  templateUrl: './new-issue-form.component.html',
  styleUrls: ['./new-issue-form.component.css']
})
export class NewIssueFormComponent implements OnInit {

  departments: string[] = [];
  userData: any = {};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.departments = this.dataService.getDepartments();
  }

  submit(data: NgForm){
    this.userData = data;
    const newUser: any = {title: this.userData.title, description: this.userData.description, department: this.userData.department,
      status: this.userData.status, severity: this.userData.severity, createdBy: "admin"};
    this.dataService.saveIssue(newUser);
    location.assign("http://localhost:4200/");
  }

}
