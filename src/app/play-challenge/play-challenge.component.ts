import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { ItemGroup, Challenge } from '../challenges';
import { SubmitChallenge } from '../challenges';
import { ChallengesService } from '../challenges.service';


import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-play-challenge',
  templateUrl: './play-challenge.component.html',
  styleUrls: ['./play-challenge.component.css']
})
export class PlayChallengeComponent implements OnInit {
  challenge: Challenge;
  itemGroup1: ItemGroup;
  itemGroup2: ItemGroup;
  submitChallengeData: SubmitChallenge = {} as any;


  group1 = [];

  group2 = [];

  solution1 = [];

  solution2 = [];

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

  // Code for single item drop
  //   movementCount: number = 0;
  // drop(event: CdkDragDrop<string[]>) {
  //    if (event.previousContainer === event.container) {
  //       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //     } else if(this.movementCount === 0){
  //        this.movementCount++;  // block next object from being moved
  //        // copy obj being moved
  //        var movingObj = event.previousContainer.data[event.previousIndex];

  //        transferArrayItem(event.previousContainer.data,
  //                     event.container.data,
  //                     event.previousIndex,
  //                     event.currentIndex);

  //        // transfer complete so copy object back
  //        event.previousContainer.data.push(movingObj);    
  //   }
  // }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private challengesService: ChallengesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    let a = this.getChallengeData()
  }

  getChallengeData(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id.toString())
    this.challengesService.getChallengeData(id.toString())
      .subscribe(challenge => {
        this.challenge = challenge[0]
        console.log(this.challenge);
        const mix_code = this.challenge.mix_group;
        const match_code =this.challenge.match_group;
        this.getGroup1Data(parseInt(mix_code))
        this.getGroup2Data(parseInt(match_code))
        for (let result of this.itemGroup1.itemSrc) {
          this.group1.push(result.name);
        }
        for (let result of this.itemGroup2.itemSrc) {
          this.group2.push(result.name);
        }
      });

  }


  goBack(): void {
    this.location.back();
  }

  getGroup1Data(mix: number): void {
    this.challengesService.getGroupData(mix)
      .subscribe(itemGroup => this.itemGroup1 = itemGroup)
  }

  getGroup2Data(match: number): void {
    this.challengesService.getGroupData(match)
      .subscribe(itemGroup => this.itemGroup2 = itemGroup)
  }

  limiterPredicate(item: CdkDrag, container: CdkDropList) {
    if (container.data.length < 1) {
      return true;
    } else {
      return false;
    }
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit(form: NgForm) {
    this.submitChallengeData.mix = this.solution1[0];
    this.submitChallengeData.match = this.solution2[0];
    this.submitChallengeData.name = form.value.userName;
    this.submitChallengeData.idea = form.value.idea;
    this.submitChallengeData.code = form.value.code;
    // console.log(this.submitChallengeData+"I am here")
    this.challengesService.postChallengeData(this.submitChallengeData)
    .subscribe(
                        (res) => {
                            console.log(res);
                        },
                        err => console.log(err)
                    );
    // this.router.navigate(['/challenges']);
  }

}