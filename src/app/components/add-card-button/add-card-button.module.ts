import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatRippleModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddCardButtonComponent } from '@src/app/components/add-card-button/add-card-button.component';
import { JiFormsModule } from '../forms/ji-forms.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    JiFormsModule
  ],
  providers: [],
  bootstrap: [],
  declarations: [AddCardButtonComponent],
  exports: [AddCardButtonComponent]
})
export class AddCardButtonModule {}
