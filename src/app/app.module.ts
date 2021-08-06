import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { BackgroundDirective } from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
