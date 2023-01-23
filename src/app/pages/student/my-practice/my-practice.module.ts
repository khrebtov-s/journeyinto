import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPracticeComponent } from '@src/app/pages/student/my-practice/my-practice.component';
import { MyPracticesComponent } from './list/my-practices.component';

import { RouteNames } from '@src/app/route-names';
import { MyPracticeDetailComponent } from './item/my-practice-detail.component';
import { ComingSoonComponent } from '@src/app/components/coming-soon/coming-soon.component';
import { ComingSoonModule } from '@src/app/components/coming-soon/coming-soon.module';
import { ClassCardModule } from '@src/app/components/class-card/class-card.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ComingSoonModule,
        ClassCardModule,
        RouterModule.forChild([
            {
                path: '',
                component: MyPracticeComponent,
                data: {
                    title: 'My practice',
                    goBack: false
                }
            },
            {
                path: 'all',
                // component: MyPracticesComponent,
                component: ComingSoonComponent,
                data: {
                    title: 'All of my practices',
                    goBack: true
                }
            },
            {
                path: ':className',
                // component: MyPracticeDetailComponent,
                component: ComingSoonComponent,
                data: {
                    title: 'My practice Detail',
                    goBack: true
                }
            }
        ])
    ],
    declarations: [
        MyPracticeComponent,
        MyPracticesComponent,
        MyPracticeDetailComponent
    ],
    providers: [],
    bootstrap: []
})
export class MyPracticeModule { }
