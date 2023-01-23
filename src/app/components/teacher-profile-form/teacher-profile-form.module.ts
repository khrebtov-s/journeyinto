import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeacherProfileFormComponent } from './teacher-profile-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompleteModule } from '../complete/complete.module';
import { ProfileImageEditModule } from '../profile-image-edit/profile-image-edit.module';
import { JiFormsModule } from '../forms/ji-forms.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        FlexLayoutModule,
        CompleteModule,
        ProfileImageEditModule,
        JiFormsModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [TeacherProfileFormComponent],
    exports: [TeacherProfileFormComponent]
})
export class TeacherProfileFormModule { }
