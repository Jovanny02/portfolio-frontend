import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopMoversComponent } from './top-movers/top-movers.component';

const routes: Routes = [
  { path: 'top-movers', component: TopMoversComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
