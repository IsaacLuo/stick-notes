import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagePanelComponent } from './message-panel.component'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MessagePanelComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    MessagePanelComponent,
  ]
})
export class MessagePanelModule { }
