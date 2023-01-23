import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeacherComponent } from '@src/app/pages/teacher/teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivateRouteGuard } from '@src/app/guards/private-route.guard';
import { RecordEditRecordingComponent } from '@src/app/pages/teacher/recordings/record/record-edit-recording/record-edit-recording.component';
import { RecordEditAudioComponent } from '@src/app/pages/teacher/recordings/record/record-edit-audio/record-edit-audio.component';
import { BookingsComponent } from '@src/app/pages/teacher/bookings/bookings.component';
import { StudentsListComponent } from '@src/app/pages/teacher/students/list/students-list.component';
import { StudentsItemComponent } from '@src/app/pages/teacher/students/item/students-item.component';
import { TakethetourDialogModule } from '@src/app/components/modals/takethetour-dialog/takethetour-dialog.module';

import { MatRippleModule } from '@angular/material';
import { RecordModule } from '@src/app/pages/teacher/recordings/record/record.module';
import { RecordingsComponent } from '@src/app/pages/teacher/recordings/recordings.component';
import { TeachersAccountComponent } from '@src/app/pages/teacher/account/account.component';
import { TeachersDashboardComponent } from '@src/app/pages/teacher/dashboard/dashboard.component';
import { TeacherProfileComponent } from '@src/app/pages/teacher/profile/profile.component';
import { TeacherProfileEditComponent } from '@src/app/pages/teacher/profile-edit/profile-edit.component';
import { TeacherAddClassesComponent } from '@src/app/pages/teacher/add-classes/add-classes.component';

import { RouteNames } from '../../route-names';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { MessageModule } from '@src/app/components/message/message.module';
import { ErrorsModule } from '@src/app/components/errors/errors.module';
import { TeacherProfileFormModule } from '@src/app/components/teacher-profile-form/teacher-profile-form.module';
import { TeacherAddClassFormModule } from '@src/app/components/teacher-add-class-form/teacher-add-class-form.module';
import { PasswordMatchInputModule } from '@src/app/components/password-match-input/password-match-input.module';
import { ComingSoonModule } from '@src/app/components/coming-soon/coming-soon.module';
import { ComingSoonComponent } from '@src/app/components/coming-soon/coming-soon.component';
import { TeachersProfileModule } from '@src/app/components/teacher-profile/teachers-profile.module';
import { StudentCardModule } from '@src/app/components/student-card/student-card.module';
import { RecordViewComponent } from './recordings/record/record-view/record-view.component';
import { JiFormsModule } from '@src/app/components/forms/ji-forms.module';
import { IconModule } from '@src/app/components/icon/icon.module';
import { BookingCardModule } from '@src/app/components/booking-card/booking-card.module';
import { NotificationCardModule } from '@src/app/components/notification-card/notification-card.module';
import { RoundPhotoModule } from '@src/app/components/round-photo/round-photo.module';
import { TeacherStripeFormModule } from '@src/app/components/teacher-stripe-form/teacher-stripe-form.module';
import { RecordComponent } from './recordings/record/record.component';

// TODO: Remove coming soon pages

@NgModule({
  declarations: [
    TeacherComponent,
    TeacherProfileComponent,
    TeachersDashboardComponent,
    TeachersAccountComponent,
    BookingsComponent,
    StudentsListComponent,
    StudentsItemComponent,
    TeacherProfileEditComponent,
    TeacherAddClassesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TakethetourDialogModule,
    MatRippleModule,
    RecordModule,
    PipesModule,
    MessageModule,
    ErrorsModule,
    TeachersProfileModule,
    TeacherProfileFormModule,
    TeacherAddClassFormModule,
    PasswordMatchInputModule,
    ComingSoonModule,
    StudentCardModule,
    JiFormsModule,
    IconModule,
    BookingCardModule,
    NotificationCardModule,
    RoundPhotoModule,
    TeacherStripeFormModule,
    RouterModule.forChild([
      {
        path: '',
        component: RecordingsComponent,
        data: {
          title: 'Library',
          goBack: false
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.profile,
        component: TeacherProfileComponent,
        data: {
          title: 'Your Profile',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.profileEdit,
        component: TeacherProfileEditComponent,
        data: {
          title: 'Edit your profile',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.account,
        component: TeachersAccountComponent,
        data: {
          title: 'Your account',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },

      // RECORDINGS ROUTES
      {
        path: RouteNames.recordings,
        component: RecordingsComponent,
        data: {
          title: 'Library',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.recordings}/${RouteNames.new}`,
        component: RecordComponent,
        data: {
          title: 'Record a class',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.recordings}/:slug`,
        component: RecordViewComponent,
        data: {
          title: 'View your class',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.recordings}/:slug/${RouteNames.editAudio}`,
        component: RecordEditAudioComponent,
        data: {
          title: 'Edit audio',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.recordings}/:slug/${RouteNames.editRecording}`,
        component: RecordEditRecordingComponent,
        
        data: {
          title: 'Edit recording',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.bookings,
        component: ComingSoonComponent,
        // component: BookingsComponent,
        data: {
          title: 'Bookings',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.bookings}/${RouteNames.newSlot}`,
        component: ComingSoonComponent,
        // component: BookingsComponent,
        data: {
          title: 'Bookings',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.bookings}/:id`,
        component: ComingSoonComponent,
        // component: BookingsComponent,
        data: {
          title: 'Bookings',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: RouteNames.students,
        component: StudentsListComponent,
        data: {
          title: 'My Students',
          goBack: true
        },
        canActivate: [PrivateRouteGuard]
      },
      {
        path: `${RouteNames.students}/:id`,
        component: StudentsItemComponent,
        canActivate: [PrivateRouteGuard],
        data: {
          title: 'Student Profile',
          goBack: true
        }
      },
      {
        path: RouteNames.addClass,
        component: TeacherAddClassesComponent,
        data: {
          title: 'Add a new class',
          goBack: true
        }
      }
    ])
  ]
})
export class TeacherModule { }
