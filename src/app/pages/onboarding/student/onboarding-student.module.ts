import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { OnBoardingStudentComponent } from './onboarding-student.component';
import { CompleteModule } from '@src/app/components/complete/complete.module';

import {RouteNames} from '../../../route-names';
import { IconModule } from '@src/app/components/icon/icon.module';
import { ErrorsModule } from '@src/app/components/errors/errors.module';
import { TeacherSearchModule } from '@src/app/components/teacher-search/teacher-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatRippleModule,
    IconModule,
    FlexLayoutModule,
    CompleteModule,
    ErrorsModule,
    TeacherSearchModule,
    RouterModule.forChild([
      {
        path: RouteNames.student,
        component: OnBoardingStudentComponent,
        data: {
          title: 'Complete Registration',
          goBack: false
        }
      }
    ])
  ],
  providers: [],
  bootstrap: [],
  declarations: [OnBoardingStudentComponent]
})
export class OnBoardingStudentModule {}
