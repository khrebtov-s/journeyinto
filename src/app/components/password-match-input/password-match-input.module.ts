import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchInputComponent } from './password-match-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JiFormsModule } from '../forms/ji-forms.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        JiFormsModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [PasswordMatchInputComponent],
    exports: [PasswordMatchInputComponent]
})
export class PasswordMatchInputModule { }
