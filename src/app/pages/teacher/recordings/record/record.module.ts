import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRippleModule, MatCheckboxModule, MatSliderModule } from '@angular/material';
import { ConfirmationDialogModule } from '@src/app/components/modals/confirmation-dialog/confirmation-dialog.module';
import { NotificationDialogModule } from '@src/app/components/modals/notification-dialog/notification-dialog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RecordComponent } from '@src/app/pages/teacher/recordings/record/record.component';
import { RecordingsComponent } from '@src/app/pages/teacher/recordings/recordings.component';
import { RecordEditAudioComponent } from '@src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component';
import { RecordEditRecordingComponent } from '@src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { RecordingCardModule } from '@src/app/components/recording-card/recording-card.module';
import { RecordViewComponent } from './record-view/record-view.component';
import { ClassRecordingModule } from '@src/app/components/class-recording/class-recording.module';
import { ClassCardModule } from '@src/app/components/class-card/class-card.module';
import { TeacherStripeFormModule } from '@src/app/components/teacher-stripe-form/teacher-stripe-form.module';
import { JiFormsModule } from '@src/app/components/forms/ji-forms.module';
import { MessageModule } from '@src/app/components/message/message.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatRippleModule,
    ConfirmationDialogModule,
    NotificationDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    DragDropModule,
    MatSliderModule,
    PipesModule,
    // RecordingCardModule,
    ClassRecordingModule,
    ClassCardModule,
    TeacherStripeFormModule,
    JiFormsModule,
    MessageModule
  ],
  declarations: [
    RecordComponent,
    RecordingsComponent,
    RecordEditAudioComponent,
    RecordEditRecordingComponent,
    RecordViewComponent
  ],
  providers: [],
  bootstrap: []
})
export class RecordModule {}
