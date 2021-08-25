import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { TopMoversComponent } from './top-movers/top-movers.component';
import { UserMoversComponent } from './user-movers/user-movers.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMoversComponent,
    ReplacePipe,
    UserMoversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
