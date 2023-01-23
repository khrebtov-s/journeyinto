import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './calendar.component';

import { RouteNames } from '@src/app/route-names';
import { CalendarNewComponent } from './new/calendar-new.component';
import { ComingSoonComponent } from '@src/app/components/coming-soon/coming-soon.component';
import { ComingSoonModule } from '@src/app/components/coming-soon/coming-soon.module';

// TODO: remove coming soon

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ComingSoonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ComingSoonComponent,
                // component: CalendarComponent,
                data: {
                    title: 'Calendar',
                    goBack: false
                }
            },
            {
                path: 'new',
                component: ComingSoonComponent,
                // component: CalendarNewComponent,
                data: {
                    title: 'New Calendar',
                    goBack: false
                }
            }
        ]),
        CommonModule,
        FormsModule,
    ],
    declarations: [
        CalendarComponent,
        CalendarNewComponent
    ],
    providers: [],
    bootstrap: []
})
export class CalendarModule { }
