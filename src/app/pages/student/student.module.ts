import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule, MatSliderModule, MatTabsModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { TakethetourDialogModule } from '@src/app/components/modals/takethetour-dialog/takethetour-dialog.module';
import { CompleteModule } from '@src/app/components/complete/complete.module';
import { StudentDashboardComponent } from '@src/app/pages/student/dashboard/dashboard.component';
import { StudentAccountComponent } from '@src/app/pages/student/account/account.component';
import { StudentSubscriptionComponent } from '@src/app/pages/student/subscription/subscription.component';
import { StudentComponent } from '@src/app/pages/student/student.component';
import { AddCardButtonModule } from '@src/app/components/add-card-button/add-card-button.module';
import { ConfirmationDialogModule } from '@src/app/components/modals/confirmation-dialog/confirmation-dialog.module';
import { RouteNames } from '@src/app/route-names';
import { PrivateRouteGuard } from '@src/app/guards/private-route.guard';
import { IconModule } from '@src/app/components/icon/icon.module';
import { PasswordMatchInputModule } from '@src/app/components/password-match-input/password-match-input.module';
import { MessageModule } from '@src/app/components/message/message.module';
import { ClassCardModule } from '@src/app/components/class-card/class-card.module';
import { TeacherCardModule } from '@src/app/components/teacher-card/teacher-card.module';
import { JiFormsModule } from '@src/app/components/forms/ji-forms.module';
import { RoundPhotoModule } from '@src/app/components/round-photo/round-photo.module';
import { PaymentCardModule } from '@src/app/components/payment-card/payment-card.module';
import { ComingSoonComponent } from '@src/app/components/coming-soon/coming-soon.component';
import { ComingSoonModule } from '@src/app/components/coming-soon/coming-soon.module';
import { MyPracticeComponent } from './my-practice/my-practice.component';
import { MyPracticeModule } from './my-practice/my-practice.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    TakethetourDialogModule,
    AddCardButtonModule,
    ConfirmationDialogModule,
    JiFormsModule,
    TeacherCardModule,
    RoundPhotoModule,
    PaymentCardModule,
    ComingSoonModule,
    // MyPracticeModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentDashboardComponent,
        data: {
          title: 'Dashboard',
          goBack: false
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.account,
        component: StudentAccountComponent,
        data: {
          title: 'My account',
          cancelUrl: RouteNames.login,
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.myPractice,
        loadChildren: () => import('./my-practice/my-practice.module').then(mod => mod.MyPracticeModule),
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.calendar,
        loadChildren: () => import('./calendar/calendar.module').then(mod => mod.CalendarModule),
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.subscription,
        // component: ComingSoonComponent,
        component: StudentSubscriptionComponent,
        data: {
          title: 'Confirm subscription',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      }
    ]),
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatDividerModule,
    MatSliderModule,
    MatTabsModule,
    MatRippleModule,
    MatCheckboxModule,
    CompleteModule,
    IconModule,
    PasswordMatchInputModule,
    MessageModule,
    ClassCardModule,
    TeacherCardModule
  ],
  declarations: [
    StudentComponent,
    StudentDashboardComponent,
    StudentAccountComponent,
    StudentSubscriptionComponent,
  ],
  providers: [],
  bootstrap: []
})
export class StudentModule {}
