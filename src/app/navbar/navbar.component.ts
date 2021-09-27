import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output()
  newIssueForm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  newIssue() {
    console.log('newIssue method');
    this.newIssueForm.emit(true);
  }

}
