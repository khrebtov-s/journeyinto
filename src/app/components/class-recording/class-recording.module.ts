import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassRecordingComponent } from './class-recording.component';
import { MatSliderModule, MatDividerModule, MatTabsModule, MatSlideToggleModule, MatButtonModule, MatInputModule, MatRippleModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '../icon/icon.module';
import { MinuteSecondsPipe } from '@src/app/pipes/minutes-seconds.pipe';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MatDividerModule,
        MatSliderModule,
        MatTabsModule,
        MatRippleModule,
        MatCheckboxModule,
        PipesModule,
        IconModule,
        RouterModule,
        MatDialogModule
    ],
    providers: [
        {
            provide: HAMMER_GESTURE_CONFIG,
            useClass: GestureConfig
        }
    ],
    bootstrap: [],
    declarations: [ClassRecordingComponent],
    exports: [ClassRecordingComponent]
})
export class ClassRecordingModule { }
