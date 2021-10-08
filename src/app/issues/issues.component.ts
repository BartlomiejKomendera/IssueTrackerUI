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
  p: number = 1;

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
    console.log("openIssue");
    console.log("Issue: " + issue.title);
    /*console.log("Current Issue: " + this.currentIssue.title);*/
    this.issue = issue;
    this.currentIssue = issue;
    this.openIssueFlag = true;
  }

  editIssue(issue: Issue){
    console.log("editIssue");
    console.log("Issue: " + issue.title);
    console.log("Current Issue: " + this.currentIssue.title);
    console.log("this. Issue: " + this.issue.title);
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
    console.log("submitIssue");
    console.log("Updated Issue: " + updatedIssue.title);
    console.log("Current Issue: " + this.currentIssue.title);
    this.backFromEdit();
  }

  backFromEdit(){
    this.currentIssue = this.issue;
    console.log("backFromEdit");
    console.log("this. Issue: " + this.issue.title);
    console.log("Current Issue: " + this.currentIssue.title);
    this.editIssueFlag = false;
    this.openIssueFlag = true;
  }

  pageChanged(p: number){
    this.p = p;
  }

}
