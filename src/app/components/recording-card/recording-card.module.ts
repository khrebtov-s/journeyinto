import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordingCardComponent } from './recording-card.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@src/app/pipes/pipes.module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PipesModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [RecordingCardComponent],
    exports: [RecordingCardComponent]
})
export class RecordingCardModule { }
