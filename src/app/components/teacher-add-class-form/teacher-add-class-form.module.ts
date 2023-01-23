import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TeacherAddClassFormComponent } from './teacher-add-class-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CompleteModule } from '../complete/complete.module';
import { ClassMediaUploadingModule } from '../class-media-uploading/class-media-uploading.module';
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
        ClassMediaUploadingModule,
        JiFormsModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [TeacherAddClassFormComponent],
    exports: [TeacherAddClassFormComponent]
})
export class TeacherAddClassFormModule { }
