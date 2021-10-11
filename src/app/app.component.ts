import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newIssueFormFlag: any;

  formChange(newIssueForm: boolean){
    console.log("form change function in app component");
    console.log("before event: " + this.newIssueFormFlag);

    this.newIssueFormFlag = newIssueForm;

    console.log("after event: " + this.newIssueFormFlag);
  }
}
