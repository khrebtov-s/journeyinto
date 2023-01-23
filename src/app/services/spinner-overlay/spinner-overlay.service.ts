import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { SpinnerOverlayComponent } from '@src/app/components/spinner-overlay/spinner-overlay.component';
import { BehaviorSubject } from 'rxjs';
import { UtilsService } from '../utils.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerOverlayService {
  public isShowing = new BehaviorSubject(false);

  // Reference to an overlay that has been created with the service.
  protected overlayRef: OverlayRef = null;

  // Initial configuration used when creating an overlay
  protected defaultConfig: OverlayConfig = {
    hasBackdrop: true,
    panelClass: 'spinner-overlay-panel'
  };

  constructor(
    private overlay: Overlay,
    private utils: UtilsService
  ) {
    this.isShowing.subscribe(isShowing => {
      this.log('Overlay status change: ', isShowing);
    });
  }

  /**
   * Show spinner overlay
   */
  public show(config: OverlayConfig = {}): void {
    if (!this.isShowing.value) {
      // Returns an OverlayRef which is a PortalHost
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        return;
      }
      // Returns an OverlayRef which is a PortalHost
      this.overlayRef = this.createOverlay({ ...this.defaultConfig, ...config });

      // Create ComponentPortal that can be attached to a PortalHost
      const spinnerOverlayPortal = new ComponentPortal(SpinnerOverlayComponent);

      // Attach ComponentPortal to PortalHost
      this.overlayRef.attach(spinnerOverlayPortal);

      this.isShowing.next(true);
    }
  }

  /**
   * Hide spinner overlay
   */
  public hide(): void {
    if (!!this.overlayRef && this.isShowing.value) {
      this.overlayRef.dispose();

      this.isShowing.next(false);
    }
  }

  /**
   * Create overlay
   *
   * @param config
   */
  protected createOverlay(config: OverlayConfig): OverlayRef {
    const overlayConfig = this.getOverlayConfig(config);

    return this.overlay.create(overlayConfig);
  }

  /**
   * Get overlay config
   *
   * @param config
   */
  protected getOverlayConfig(config: OverlayConfig): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  log(text, ...args) {
    this.utils.log(text, this.constructor.name, ...args);
  }
}
