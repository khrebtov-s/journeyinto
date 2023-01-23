import { NgModule } from '@angular/core';

import { TeacherSearchComponent } from './teacher-search.component';
import { FormsModule } from '@angular/forms';
import { JiFormsModule } from '../forms/ji-forms.module';
import { IconModule } from '../icon/icon.module';
import { TeacherCardModule } from '../teacher-card/teacher-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        JiFormsModule,
        IconModule,
        TeacherCardModule
    ],
    declarations: [TeacherSearchComponent],
    exports: [TeacherSearchComponent],
    providers: [],
})
export class TeacherSearchModule { }
