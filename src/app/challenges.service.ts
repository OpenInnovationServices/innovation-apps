import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Challenge } from './challenges';
import { ItemGroup } from './challenges';
import { SubmitChallenge } from './challenges';
// import { CHALLENGES } from './mock-challenges';
import { CHALLENGE_DATA } from './mock-challenges';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  
  private challengesInfoUrl = 'https://fergal-brophy-prod.herokuapp.com/api/getChallenges/';  // URL to web api
  private postChallengeDataUrl = 'https://fergal-brophy-prod.herokuapp.com/api/challenge/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient
  ) { }

  getChallenges(): Observable<Challenge[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    // return of(CHALLENGES);
    return this.http.get<Challenge[]>(this.challengesInfoUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Challenge[]>('getChallenges', []))
      );
  }

  getChallenge(id: any): Observable<Challenge> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(CHALLENGES.find(challenge => challenge.id === id));
    const url = `${this.challengesInfoUrl}/${id}`;
    console.log(url);
    return this.http.get<Challenge>(url).pipe(
      tap(_ => this.log(`fetched challenge id=${id}`)),
      catchError(this.handleError<Challenge>(`getHero id=${id}`))
    );
  }

  getGroupData(id: number): Observable<ItemGroup> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('HeroService: fetched heroes');
    return of(CHALLENGE_DATA.find(itemGroup => itemGroup.id === id));
  }

  getChallengeData(id: any): Observable<Challenge> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = `${this.challengesInfoUrl}${id}`;
    console.log(url);
    return this.http.get<Challenge>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Challenge>(`challengesInfoUrl id=${id}`))
    );
  }

  /** POST: add a new challenge to the database */
postChallengeData (submitChallenge: SubmitChallenge): Observable<SubmitChallenge> {
  // console.log("Posting Data "+ JSON.stringify(submitChallenge));
  // console.log("Posting Url: "+ this.postChallengeDataUrl);
  const cusHeaders = new HttpHeaders()
          .set('Content-Type', 'application/json');
  return this.http.post<SubmitChallenge>(this.postChallengeDataUrl, JSON.stringify(submitChallenge), {headers:cusHeaders})
    .pipe(
      catchError(this.handleError('submitChallenge', submitChallenge))
    );
}

getSubmittedData(): Observable<SubmitChallenge[]> {
  // TODO: send the message _after_ fetching the heroes
  // this.messageService.add('HeroService: fetched heroes');
  // return of(CHALLENGES);
  return this.http.get<SubmitChallenge[]>(this.postChallengeDataUrl)
    .pipe(
      tap(_ => this.log('fetched data')),
      catchError(this.handleError<SubmitChallenge[]>('getChallenges', []))
    );
}

getSubmittedDataWithCode(code: any): Observable<SubmitChallenge[]> {
  // TODO: send the message _after_ fetching the hero
  // this.messageService.add(`HeroService: fetched hero id=${id}`);
  const url = `${this.postChallengeDataUrl}${code}`;
  console.log(url);
  return this.http.get<SubmitChallenge[]>(url).pipe(
    tap(_ => this.log(`fetched hero id=${code}`)),
    catchError(this.handleError<SubmitChallenge[]>(`challengesInfoUrl id=${code}`))
  );
}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
