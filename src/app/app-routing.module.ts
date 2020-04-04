import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayChallengeComponent } from './play-challenge/play-challenge.component'


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'challenges', component: ChallengesComponent },
  { path: 'play/:id', component: PlayChallengeComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
