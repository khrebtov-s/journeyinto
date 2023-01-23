import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ForgotDialogFormComponent } from './forgot-dialog-form.component';
import { JiFormsModule } from '@src/app/components/forms/ji-forms.module';

@NgModule({
  declarations: [ForgotDialogFormComponent],
  entryComponents: [ForgotDialogFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,

    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatRippleModule,
    JiFormsModule
  ],
})
export class ForgotDialogFormModule {}
