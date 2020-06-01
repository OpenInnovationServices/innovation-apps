import { Component, OnInit } from '@angular/core';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../challenges';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  challenges: Challenge[];

  constructor(private challengesService: ChallengesService) { }

  ngOnInit(): void {
    this.getChallenges();
  }

  getChallenges(): void {
    this.challengesService.getChallenges()
    .subscribe(challenges => this.challenges = challenges);
  }

}
