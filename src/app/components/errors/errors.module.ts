import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './errors.component';
import { PipesModule } from '@src/app/pipes/pipes.module';


@NgModule({
    imports: [
        CommonModule,
        PipesModule
    ],
    providers: [],
    bootstrap: [],
    declarations: [ErrorsComponent],
    exports: [ErrorsComponent]
})
export class ErrorsModule { }
