import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResetPasswordComponent } from './reset-password.component';
import { PasswordMatchInputModule } from '@src/app/components/password-match-input/password-match-input.module';
import { FormHeaderModule } from '@src/app/components/form-header/form-header.module';
import { ErrorsModule } from '@src/app/components/errors/errors.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: ':token',
                component: ResetPasswordComponent,
                data: {
                    goBack: false
                }
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatRippleModule,
        FlexLayoutModule,
        PasswordMatchInputModule,
        FormHeaderModule,
        ErrorsModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
