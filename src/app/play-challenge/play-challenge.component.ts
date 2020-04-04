import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Challenge } from '../challenges';
import { ChallengesService } from '../challenges.service';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-play-challenge',
  templateUrl: './play-challenge.component.html',
  styleUrls: ['./play-challenge.component.css']
})
export class PlayChallengeComponent implements OnInit {
  challenge: Challenge;
  
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  solution = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor(
    private route: ActivatedRoute,
    private challengesService: ChallengesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getChallenge()
  }

  getChallenge(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.challengesService.getChallenge(id)
      .subscribe(challenge => this.challenge = challenge);
  }

  goBack(): void {
    this.location.back();
  }

}
