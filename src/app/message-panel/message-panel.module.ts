import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePanelComponent } from './message-panel.component'

@NgModule({
  declarations: [
    MessagePanelComponent
  ],
  imports: [
    CommonModule,
    MessagePanelComponent
  ]
})
export class MessagePanelModule { }
