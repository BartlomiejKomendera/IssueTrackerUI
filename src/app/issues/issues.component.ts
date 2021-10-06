import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getIssues().subscribe(
      res => {this.issues = res}
    );
  }

  openIssue(issue: Issue){
    this.currentIssue = issue;
    this.openIssueFlag = true;
  }

  editIssue(issue: Issue){
    this.currentIssue = issue;
    this.editIssueFlag = true;
  }

}
