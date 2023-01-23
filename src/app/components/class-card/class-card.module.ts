import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassCardComponent } from './class-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoundPhotoModule } from '../round-photo/round-photo.module';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RoundPhotoModule,
        PipesModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [ClassCardComponent],
    exports: [ClassCardComponent]
})
export class ClassCardModule { }
