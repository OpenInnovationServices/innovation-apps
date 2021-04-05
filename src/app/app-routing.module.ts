import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayChallengeComponent } from './play-challenge/play-challenge.component';
import { CtdPlayChallengeComponent } from './ctd-play-challenge/ctd-play-challenge.component';
import { CtdDashboardComponent } from './ctd-dashboard/ctd-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'crazyCombinations', component: PlayChallengeComponent },
  { path: 'crazyCombinations/dashboard', component: DashboardComponent },
  { path: 'connectTheDots', component: CtdPlayChallengeComponent},
  { path: 'connectTheDots/dashboard', component: CtdDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
