import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SignUpComponent } from './sign-up.component';
import { FormHeaderModule } from '@src/app/components/form-header/form-header.module';
import { ErrorsModule } from '@src/app/components/errors/errors.module';
import { JiFormsModule } from '@src/app/components/forms/ji-forms.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignUpComponent,
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
    FormHeaderModule,
    ErrorsModule,
    JiFormsModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [SignUpComponent]
})
export class SignUpModule {}
