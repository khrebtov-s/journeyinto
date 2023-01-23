import { NgModule } from '@angular/core';

import { BookingCardComponent } from './booking-card.component';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';

@NgModule({
    imports: [
        CommonModule,
        IconModule
    ],
    exports: [BookingCardComponent],
    declarations: [BookingCardComponent],
    providers: [],
})
export class BookingCardModule { }
