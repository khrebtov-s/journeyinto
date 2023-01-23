import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeachersComponent } from '@src/app/pages/teachers/teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material';

import { RouteNames } from '@src/app/route-names';
import { PublicRecordingsComponent } from './recordings/public-recordings.component';
import { PublicSingleRecordingComponent } from './recordings/single-recording/public-single-recording.component';
import { PublicTeacherProfileComponent } from './public-teacher-profile.component';
import { TeachersProfileModule } from '@src/app/components/teacher-profile/teachers-profile.module';
import { ProfileComponent } from './profile/profile.component';
import { ClassRecordingModule } from '@src/app/components/class-recording/class-recording.module';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatRippleModule,
        TeachersProfileModule,
        ClassRecordingModule,
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent,
                data: {
                    title: 'Teacher Profile',
                    goBack: true
                }
            },
            {
                path: RouteNames.recordings,
                loadChildren: () => import('./recordings/public-recordings.module')
                    .then(mod => mod.PublicRecordingsModule)
            },
        ])
    ]
})
export class PublicTeacherProfileModule {}
