import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopMoversComponent } from './top-movers/top-movers.component';
import { UserIncomeComponent } from './user-income/user-income.component';
import { UserMoversComponent } from './user-movers/user-movers.component';

const routes: Routes = [
  // Todo: rework all this to single url /dashboard or /
  { path: 'top-movers', component: TopMoversComponent },
  { path: 'user-movers', component: UserMoversComponent },
  { path: 'user-income', component: UserIncomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
