import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../challenges.service';
import { SubmitChallenge } from '../challenges';


@Component({
  selector: 'app-ctd-dashboard',
  templateUrl: './ctd-dashboard.component.html',
  styleUrls: ['./ctd-dashboard.component.css']
})
export class CtdDashboardComponent implements OnInit {
  submittedData: SubmitChallenge[];
  constructor(private challengesService: ChallengesService) { }

  ngOnInit(): void {
    this.getSubmittedData();
  }

  getSubmittedData(): void {
    console.log("getting data...");
    this.challengesService.getSubmittedDataWithCode("1001")
    .subscribe(submittedData => this.submittedData = submittedData);
    console.log(this.submittedData);
  }
}
