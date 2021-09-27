import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newIssueForm: any;

  formChange(newIssueForm: boolean){
    this.newIssueForm = newIssueForm;
  }
}
