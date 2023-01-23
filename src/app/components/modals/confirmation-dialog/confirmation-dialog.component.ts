import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

  message = 'Are you sure?';
  subtext = '';
  confirmButtonText = 'Ok';
  cancelButtonText = 'Cancel';

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      this.subtext = data.subtext || this.subtext;
      if (data.buttonText) {
        if (data.buttonText.ok === false || data.buttonText.ok) {
          this.confirmButtonText = data.buttonText.ok;
        }
        if (data.buttonText.cancel === false || data.buttonText.cancel) {
          this.cancelButtonText = data.buttonText.cancel;
        }
      }
    }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
