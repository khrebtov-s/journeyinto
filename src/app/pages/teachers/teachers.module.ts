import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TeachersComponent } from '@src/app/pages/teachers/teachers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material';

import { RouteNames } from '@src/app/route-names';
import { TeachersProfileComponent } from '@src/app/components/teacher-profile/teachers-profile.component';
import { TeachersProfileModule } from '@src/app/components/teacher-profile/teachers-profile.module';
import { PublicTeacherProfileComponent } from './public-teacher-profile/public-teacher-profile.component';
import { TeacherCardModule } from '@src/app/components/teacher-card/teacher-card.module';
import { IconModule } from '@src/app/components/icon/icon.module';
import { TeacherSearchModule } from '@src/app/components/teacher-search/teacher-search.module';

@NgModule({
    declarations: [
        TeachersComponent,
        PublicTeacherProfileComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatRippleModule,
        TeachersProfileModule,
        TeacherCardModule,
        IconModule,
        TeacherSearchModule,
        RouterModule.forChild([
            {
                path: '',
                component: TeachersComponent,
                data: {
                    title: 'Teachers',
                    goBack: true
                }
            },
            {
                path: ':name',
                component: PublicTeacherProfileComponent,
                loadChildren: () => import('./public-teacher-profile/public-teacher-profile.module')
                    .then(mod => mod.PublicTeacherProfileModule)
            },
        ])
    ]
})
export class TeachersModule { }
