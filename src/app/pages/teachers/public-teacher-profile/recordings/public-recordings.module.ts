import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeachersComponent } from '@src/app/pages/teachers/teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material';

import { RouteNames } from '@src/app/route-names';
import { PublicRecordingsComponent } from './public-recordings.component';
import { PublicSingleRecordingComponent } from './single-recording/public-single-recording.component';
import { ClassCardModule } from '@src/app/components/class-card/class-card.module';
import { ClassRecordingModule } from '@src/app/components/class-recording/class-recording.module';

@NgModule({
    declarations: [
        PublicRecordingsComponent,
        PublicSingleRecordingComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatRippleModule,
        ClassCardModule,
        ClassRecordingModule,
        RouterModule.forChild([
            {
                path: '',
                component: PublicRecordingsComponent,
                data: {
                    title: 'Teacher Classes',
                    goBack: true
                }
            },
            {
                path: ':recordingSlug',
                component: PublicSingleRecordingComponent,
                data: {
                    title: 'Listen and Flow',
                    goBack: true
                }
            }
        ])
    ]
})
export class PublicRecordingsModule { }
