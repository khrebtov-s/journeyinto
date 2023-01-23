import { NgModule } from '@angular/core';

import { TeacherStripeFormComponent } from './teacher-stripe-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JiFormsModule } from '../forms/ji-forms.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconModule } from "@src/app/components/icon/icon.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        JiFormsModule,
        IconModule
    ],
    exports: [
        TeacherStripeFormComponent
    ],
    declarations: [
        TeacherStripeFormComponent
    ],
    providers: [],
})
export class TeacherStripeFormModule { }
