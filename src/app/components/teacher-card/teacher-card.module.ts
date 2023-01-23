import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherCardComponent } from './teacher-card.component';
import { RoundPhotoModule } from '../round-photo/round-photo.module';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        CommonModule,
        RoundPhotoModule,
        PipesModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [TeacherCardComponent],
    exports: [TeacherCardComponent]
})
export class TeacherCardModule { }
