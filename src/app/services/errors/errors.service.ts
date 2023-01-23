import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { RouteNames } from '@src/app/route-names';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {
  private excludedErrorKeys = [
    'code'
  ];

  private specialErrorMessages = {
    token: `This url seems to be expired. Please try and reset your password again by going to the login page.`
  };

  // Errors
  public serverError$: Subject<any> = new Subject<any>();
  /**
   * Error 500 from interceptor
   *
   * @param event
   */
  public onServerError(event: any): void {    
    this.serverError$.next(event);
  }

  public processError(event: HttpErrorResponse): string {
    if (event.error) {

      if (typeof event.error === 'string') {
        return event.error;

      } else {

        const errorsString = this.getErrorObj(event.error);
        return errorsString;

      }

    }

    return 'Something went wrong';
  }

  private getErrorObj(errorObj) {
    const errorsArray = [];
    const errorKeys = Object.keys(errorObj);

    errorKeys.map((errorKey: any) => {
      if (!this.excludedErrorKeys.includes(errorKey)) {
        if (this.specialErrorMessages[errorKey]) {
          errorsArray.push(this.specialErrorMessages[errorKey]);

        } else {
          const error = errorObj[errorKey];

          if (typeof error === 'string') {
            errorsArray.push(error);

          } else if (Array.isArray(error)) {

            error.map(subError => {
              errorsArray.push(subError);
            });

          } else if (error instanceof Object) {
            errorsArray.push(this.getErrorObj(error));

          }
        }
      }

    });

    const errorsString = errorsArray.join('<br>');

    return errorsString;
  }
}
