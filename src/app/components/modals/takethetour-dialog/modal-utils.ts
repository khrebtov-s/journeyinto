
import { TakethetourDialogComponent} from './takethetour-dialog.component';

export const openTourModal = (dialog) => {
    const body = document.querySelector('body');
    const dialogRef = dialog.open(TakethetourDialogComponent, {
      panelClass: 'takethetour-modal',
    });

    body.style.overflow = 'hidden';

    dialogRef.afterClosed()
      .subscribe(() => {
        body.style.overflow = 'initial';
      });
}