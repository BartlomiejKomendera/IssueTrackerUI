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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getIssues().subscribe(
      res => {this.issues = res}
    );
  }

}
