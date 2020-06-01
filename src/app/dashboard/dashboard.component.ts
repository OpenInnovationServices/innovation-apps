import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../challenges.service';
import { SubmitChallenge } from '../challenges';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  submittedData: SubmitChallenge[];
  constructor(private challengesService: ChallengesService) { }

  ngOnInit(): void {
    this.getSubmittedData();
  }

  getSubmittedData(): void {
    console.log("getting data...");
    this.challengesService.getSubmittedData()
    .subscribe(submittedData => this.submittedData = submittedData);
    console.log(this.submittedData);
  }
}
