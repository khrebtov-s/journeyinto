import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { ProfileImageEditComponent } from './profile-image-edit.component';

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
    declarations: [ProfileImageEditComponent],
    exports: [ProfileImageEditComponent]
})
export class ProfileImageEditModule { }
