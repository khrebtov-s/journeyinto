import { NgModule } from '@angular/core';
import { OnBoardingStudentModule } from './student/onboarding-student.module';
import { OnboardingTeacherModule } from './teacher/onboarding-teacher.module';

@NgModule({
  imports: [
    OnBoardingStudentModule, 
    OnboardingTeacherModule
  ],
  providers: [],
  bootstrap: [],
  declarations: []
})
export class OnBoardingModule {}
