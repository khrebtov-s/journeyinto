import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { CompleteComponent } from './complete.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    IconModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [CompleteComponent],
  exports: [CompleteComponent]
})
export class CompleteModule {}
