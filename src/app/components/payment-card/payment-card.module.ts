import { NgModule } from '@angular/core';

import { PaymentCardComponent } from './payment-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [PaymentCardComponent],
    declarations: [PaymentCardComponent],
    providers: [],
})
export class PaymentCardModule { }
