import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-issue-form',
  templateUrl: './new-issue-form.component.html',
  styleUrls: ['./new-issue-form.component.css']
})
export class NewIssueFormComponent implements OnInit {

  departments: string[] = [];
  userData: any = {};
  @Output()
  backFromNewIssueEvent = new EventEmitter<boolean>();

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

  backFromNewIssue(){
    console.log('Back from new issue');
    this.backFromNewIssueEvent.emit(false);
  }

}
