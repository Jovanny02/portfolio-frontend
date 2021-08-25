import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { TopMoversComponent } from './top-movers/top-movers.component';
import { UserMoversComponent } from './user-movers/user-movers.component';
import { SelectUserComponent } from './select-user/select-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    TopMoversComponent,
    ReplacePipe,
    UserMoversComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // the FormsModule is needed for forms
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
