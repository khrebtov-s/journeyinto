import { NgModule } from '@angular/core';

import { NotificationCardComponent } from './notification-card.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

@NgModule({
    imports: [
        CommonModule,
        IconModule
    ],
    exports: [NotificationCardComponent],
    declarations: [NotificationCardComponent],
    providers: [],
})
export class NotificationCardModule { }
