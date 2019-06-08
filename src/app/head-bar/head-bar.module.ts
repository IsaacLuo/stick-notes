import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeadBarComponent } from './head-bar.component';

@NgModule({
  declarations: [
    HeadBarComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    HeadBarComponent
  ]
})
export class HeadBarModule { }
