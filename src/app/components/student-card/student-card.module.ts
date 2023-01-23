import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentCardComponent } from './student-card.component';
import { RoundPhotoModule } from '../round-photo/round-photo.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RoundPhotoModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [StudentCardComponent],
  exports: [StudentCardComponent]
})
export class StudentCardModule {}
