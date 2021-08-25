import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { TopMoversComponent } from './top-movers/top-movers.component';
import { UserMoversComponent } from './user-movers/user-movers.component';
import { UserIncomeComponent } from './user-income/user-income.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [
    AppComponent,
    TopMoversComponent,
    ReplacePipe,
    UserMoversComponent,
    UserIncomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
