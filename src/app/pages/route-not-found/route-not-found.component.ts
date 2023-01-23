import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerOverlayService } from '@src/app/services';

@Component({
  selector: 'app-route-not-found',
  templateUrl: './route-not-found.component.html'
})
export class RouteNotFoundComponent {
  constructor(
    public router: Router,
    public spinner: SpinnerOverlayService
  ) {
    this.spinner.hide();
  }
}
