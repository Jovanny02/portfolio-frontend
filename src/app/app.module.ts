import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectUserComponent } from './select-user/select-user.component';


@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // the FormsModule is needed for forms
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
