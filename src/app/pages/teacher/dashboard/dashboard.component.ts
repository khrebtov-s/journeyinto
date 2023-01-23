import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { TakethetourDialogComponent } from '@src/app/components/modals/takethetour-dialog/takethetour-dialog.component';
import { environment } from '@src/environments/environment';

import {RouteNames} from '../../../route-names';
import { SpinnerOverlayService } from '../../../services';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class TeachersDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  routeNames: typeof RouteNames = RouteNames;

  public user$: Observable<any> = this.store.pipe(
    select(selectUserActive),
    filter(Boolean)
  );
  public user = null;
  public subscribed = [];
  public notifications = [];
  private navigationData: { openTakethetourModal?: boolean } = {};
  public appUrl = environment.serverUrl;

  // User view statuses - student or teacher
  public viewStatuses = ViewStatuses;

  public subscriptions: Subscription[] = [];
  public bookings = [
    {
      title: 'Private session',
      date: '02/07/19'
    },
    {
      title: 'Private session',
      date: '02/07/19'
    }
  ];

  public copied = false;
  public showSignupCompletedMsg = false;

  constructor(
    private store: Store<IAppState>,
    private router: Router,
    private dialog: MatDialog,
    public spinner: SpinnerOverlayService
  ) {
    const currentNav = this.router.getCurrentNavigation();
    const navigationData = currentNav ? currentNav.extras.state : {};
    this.navigationData = navigationData;
  }

  ngOnInit() {
    // hideoverlay

    this.showSignupCompletedMsg = history.state.data && history.state.data.profileCompleted;

    this.subscriptions.push(
      this.user$.subscribe(user => {
        // hideoverlay

        this.showSignupCompletedMsg = history.state.data && history.state.data.profileCompleted;

        const { notifications, teachers } = user;
        this.notifications = notifications;

        if (teachers && teachers.subscribed.length) {
          this.subscribed = teachers.subscribed;
        }

        this.user = user;

        // hideoverlay
        // console.log('hide spinner');
        this.spinner.hide();
      })
    );
  }

  ngAfterViewInit() {
    this.checkOpenTakethetourModal();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  copyProfileUrl(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    inputElement.blur();

    this.copied = true;
  }

  checkOpenTakethetourModal() {
    if (this.navigationData && this.navigationData.openTakethetourModal) {
      const dialogRef = this.dialog.open(TakethetourDialogComponent, {
        panelClass: 'takethetour-modal'
      });
    }
  }

}
