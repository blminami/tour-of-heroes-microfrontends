import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';

export const remoteRoutes: Route[] = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(remoteRoutes),
  ],
  declarations: [DashboardComponent, HeroSearchComponent],
})
export class DashboardModule {}
