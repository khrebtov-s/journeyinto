import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: 'confirm-dialog.component.html'
})
export class ConfirmDialogComponent {

  public message: string = '';
  public confirmButtonText: string = '';
  public cancelButtonText: string = '';
  public title: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: any,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
    if (data) {
      this.message = data.message || this.message;
      this.title = data.title || this.title;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  }

  close() {
    this.dialogRef.close();
  }
}
