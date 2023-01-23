import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [ComingSoonComponent],
    exports: [ComingSoonComponent]
})
export class ComingSoonModule { }
