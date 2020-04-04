import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Challenge } from './challenges';
import { CHALLENGES } from './mock-challenges';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor() { }

  getChallenges(): Observable<Challenge[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return of(CHALLENGES);
  }

  getChallenge(id: number): Observable<Challenge> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(CHALLENGES.find(challenge => challenge.id === id));
  }
}
