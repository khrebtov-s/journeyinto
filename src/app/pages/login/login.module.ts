import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login.component';
import { ForgotDialogFormModule } from './forgot-dialog-form/forgot-dialog-form.module';
import { ConfirmDialogModule } from './confirm-dialog/confirm-dialog.module';
import { TakethetourDialogModule } from '@src/app/components/modals/takethetour-dialog/takethetour-dialog.module';
import { MessageModule } from '@src/app/components/message/message.module';
import { ErrorsModule } from '@src/app/components/errors/errors.module';
import { JiFormsModule } from '@src/app/components/forms/ji-forms.module';

@NgModule({
  imports: [
    CommonModule,
    ForgotDialogFormModule,
    ConfirmDialogModule,
    TakethetourDialogModule,
    JiFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    FlexLayoutModule,
    MessageModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [LoginComponent]
})
export class LoginModule {}
