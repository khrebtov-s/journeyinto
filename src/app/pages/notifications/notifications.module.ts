import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComingSoonComponent } from '@src/app/components/coming-soon/coming-soon.component';
import { ComingSoonModule } from '@src/app/components/coming-soon/coming-soon.module';
import { NotificationCardModule } from '@src/app/components/notification-card/notification-card.module';

// TODO: remove coming soon stuff

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ComingSoonModule,
    NotificationCardModule,
    RouterModule.forChild([
      {
        path: '',
        component: ComingSoonComponent,
        // component: NotificationsComponent,
        data: {
          title: 'Notifications',
          goBack: true
        }
      }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class NotificationsModule {}
