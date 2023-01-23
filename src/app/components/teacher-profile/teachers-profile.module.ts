import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersProfileComponent } from './teachers-profile.component';
import { MessageModule } from '../message/message.module';
import { PipesModule } from '@src/app/pipes/pipes.module';
import { MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClassCardModule } from '../class-card/class-card.module';


@NgModule({
    imports: [
        CommonModule,
        MessageModule,
        PipesModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        MatRippleModule,
        RouterModule,
        ClassCardModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [TeachersProfileComponent],
    exports: [TeachersProfileComponent]
})
export class TeachersProfileModule { }
