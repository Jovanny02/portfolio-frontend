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
import { SelectUserComponent } from './select-user/select-user.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CashAccountsComponent } from './cash-accounts/cash-accounts.component';
import { InvestmentAccountsComponent } from './investment-accounts/investment-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    TopMoversComponent,
    ReplacePipe,
    UserMoversComponent,
    UserIncomeComponent,
    DashboardComponent,
    CashAccountsComponent,
    InvestmentAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // the FormsModule is needed for forms
    HttpClientModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
