import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { ClassMediaUploadingComponent } from './class-media-uploading.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatRippleModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [ClassMediaUploadingComponent],
    exports: [ClassMediaUploadingComponent]
})
export class ClassMediaUploadingModule { }
