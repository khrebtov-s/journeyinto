import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JiInputComponent } from './ji-input/ji-input.component';
import { JiCheckboxComponent } from './ji-checkbox/ji-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatCheckboxModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [
        JiInputComponent,
        JiCheckboxComponent,
    ],
    exports: [
        JiInputComponent,
        JiCheckboxComponent
    ]
})
export class JiFormsModule { }
