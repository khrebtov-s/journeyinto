import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { IconModule } from '../icon/icon.module';


@NgModule({
    imports: [
        CommonModule,
        IconModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [MessageComponent],
    exports: [MessageComponent]
})
export class MessageModule { }
