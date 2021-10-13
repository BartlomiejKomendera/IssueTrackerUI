import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../model/Issue';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  departments: string[] = ["Department 1","Department 2","Department 3","Department 4","Department 5"];
  severities: string[] = ["Low","Medium","High"];
  statuses: string[] = ["Open","Closed"];

  getDepartments(){
    return this.departments;
  }
  getSeverities(){
    return this.severities;
  }
  getStatuses(){
    return this.statuses;
  }

  constructor(private http: HttpClient) { }
  
  private headers = new HttpHeaders({
    "Content-Type": "application/json"
  });

  getIssues(): Observable<Issue[]>{
    console.log("IssueService - getIssues");
    return this.http.get<Issue[]>("http://localhost:8080/all", {headers: this.headers});
  }

  saveIssue(issue: any){
    console.log("IssueService - saveIssue");
    this.http.post<any>("http://localhost:8080/new", issue, {headers: this.headers}).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }

  updateIssue(issue: Issue){
    console.log("IssueService - updateIssue");
    this.http.put<Issue>("http://localhost:8080/edit", issue, {headers: this.headers}).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }

  deleteIssue(id: number){
    console.log("IssueService - deleteIssue");
    this.http.delete("http://localhost:8080/delete?id=" + id.toString(), {headers: this.headers}).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }
}
