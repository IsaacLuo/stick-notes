import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeadBarComponent } from './head-bar/head-bar.component';
import { HeadBarModule } from './head-bar/head-bar.module';
import { MessagePanelComponent } from './message-panel/message-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeadBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeadBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
