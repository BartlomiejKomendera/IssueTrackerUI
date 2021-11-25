import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newIssueFormFlag: any;

  formChange(newIssueForm: boolean){
    console.log("form change function in app component");
    console.log("before event: " + this.newIssueFormFlag);

    this.newIssueFormFlag = newIssueForm;

    console.log("after event: " + this.newIssueFormFlag);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
