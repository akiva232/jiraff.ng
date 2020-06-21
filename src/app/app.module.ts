import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JPageComponent } from './c/jiraff-Administration/j-page/j-page.component';
import { JItemComponent } from './c/jiraff-Administration/j-item/j-item.component';
import { JDetailsComponent } from './c/jiraff-Administration/j-details/j-details.component';
import { JlabelSpanComponent } from './c/jiraff-Administration/jlabel-span/jlabel-span.component';

@NgModule({
  declarations: [
    AppComponent,
    JPageComponent,
  
    JItemComponent,
    JDetailsComponent,
    JlabelSpanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
