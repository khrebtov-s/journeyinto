import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoundPhotoComponent } from './round-photo.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        IconModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [RoundPhotoComponent],
    exports: [RoundPhotoComponent]
})
export class RoundPhotoModule { }
