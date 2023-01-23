import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import { SpinnerOverlayComponent } from '@src/app/components/spinner-overlay/spinner-overlay.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, OverlayModule],
  providers: [],
  bootstrap: [],
  declarations: [SpinnerOverlayComponent],
  entryComponents: [SpinnerOverlayComponent]
})
export class SpinnerOverlayModule {}
