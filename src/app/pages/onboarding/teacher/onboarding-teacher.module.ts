import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OnboardingTeacherStepOneComponent } from './step-one/onboarding-teacher-step-one.component';
import { OnboardingTeacherStepTwoComponent } from './step-two/onboarding-teacher-step-two.component';
import { CompleteModule } from '@src/app/components/complete/complete.module';
import { RouteNames } from '../../../route-names';
import { ProfileImageEditModule } from '../../../components/profile-image-edit/profile-image-edit.module';
import { ClassMediaUploadingModule } from '../../../components/class-media-uploading/class-media-uploading.module';
import { TeacherProfileFormModule } from '@src/app/components/teacher-profile-form/teacher-profile-form.module';
import { TeacherAddClassFormModule } from '@src/app/components/teacher-add-class-form/teacher-add-class-form.module';
import { MessageModule } from '@src/app/components/message/message.module';
import { PrivateRouteGuard } from '@src/app/guards/private-route.guard';
import { TeacherStripeFormModule } from '@src/app/components/teacher-stripe-form/teacher-stripe-form.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: RouteNames.teacher,
        children: [
          {
            path: RouteNames.stepOne,
            component: OnboardingTeacherStepOneComponent,
            data: {
              title: 'Create your profile',
              goBack: false
            },
            canActivate: [PrivateRouteGuard]
          },
          {
            path: RouteNames.stepTwo,
            component: OnboardingTeacherStepTwoComponent,
            data: {
              title: 'Manage Your Money',
              goBack: false
            },
            canActivate: [PrivateRouteGuard]
          }
        ]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    FlexLayoutModule,
    CompleteModule,
    ProfileImageEditModule,
    ClassMediaUploadingModule,
    TeacherProfileFormModule,
    TeacherStripeFormModule,
    MessageModule,
    TeacherAddClassFormModule,
  ],
  providers: [],
  bootstrap: [],
  declarations: [OnboardingTeacherStepOneComponent, OnboardingTeacherStepTwoComponent]
})
export class OnboardingTeacherModule {}
