import { Component, Input, OnInit, Output } from '@angular/core';
import { Issue } from 'src/app/model/Issue';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {
  @Input()
  issue!: Issue;

  constructor() { }

  ngOnInit(): void {
  }

}
