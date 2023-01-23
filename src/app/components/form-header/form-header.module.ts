import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormHeaderComponent } from '@src/app/components/form-header/form-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [FormHeaderComponent],
    exports: [FormHeaderComponent]
})
export class FormHeaderModule { }
