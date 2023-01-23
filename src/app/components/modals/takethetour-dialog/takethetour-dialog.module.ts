import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCommonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatStepperModule,
  MatIconModule,
} from '@angular/material';

import { TakethetourDialogComponent } from './takethetour-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { PipesModule } from '@src/app/pipes/pipes.module';

@NgModule({
  declarations: [TakethetourDialogComponent],
  entryComponents: [TakethetourDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatRippleModule,
    MatStepperModule,
    MatIconModule,
    PipesModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
    },
    { 
      provide: HAMMER_GESTURE_CONFIG, 
      useClass: HammerGestureConfig 
    }
  ]
})
export class TakethetourDialogModule {}
