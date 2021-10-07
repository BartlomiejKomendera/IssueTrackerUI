import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Issue } from '../model/Issue';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues!: Issue[];
  issue!: Issue;
  openIssueFlag: boolean = false;
  editIssueFlag: boolean = false;
  currentIssue!: Issue;
  departments: String[] = [];
  severities: String[] = [];
  statuses: String[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getIssues().subscribe(
      res => {this.issues = res}
    );
    this.departments = this.dataService.getDepartments();
    this.severities = this.dataService.getSeverities();
    this.statuses = this.dataService.getStatuses();
  }

  openIssue(issue: Issue){
    this.currentIssue = issue;
    this.openIssueFlag = true;
  }

  editIssue(issue: Issue){
    this.currentIssue = issue;
    this.editIssueFlag = true;
  }

  submit(data: NgForm){
    let formIssue: any = {};
    formIssue = data;
    let updatedIssue: Issue = {id: this.currentIssue.id, title: formIssue.title, department: formIssue.department, severity: formIssue.severity, status: formIssue.status, 
      createdBy: this.currentIssue.createdBy, creationDate: this.currentIssue.creationDate, description: formIssue.description};

    this.dataService.updateIssue(updatedIssue);
    this.currentIssue = updatedIssue;
    this.backFromEdit();
  }

  backFromEdit(){
    this.editIssueFlag = false;
    this.openIssueFlag = true;
  }

}
