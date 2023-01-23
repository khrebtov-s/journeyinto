import { Component, OnDestroy, OnInit } from "@angular/core";
import { RequestStatus } from "@src/app/services/api.service.interface";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IAppState } from "@src/app/store/app.reducers";
import { select, Store } from "@ngrx/store";
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import {
  selectUserActive,
  selectUserStatus,
  selectUserMessages,
} from "@src/app/store/modules/user/user.selectors";
import {
  selectCards,
  selectCardsStatus,
} from "@src/app/store/modules/cards/cards.selectors";
import {
  GetUserCardsRequestAction,
  MakeUserCardDefaultRequestAction,
} from "@src/app/store/modules/cards/cards.actions";
import { RemoveUserCardRequestAction } from "@src/app/store/modules/cards/cards.actions";
import {
  UpdateCurrentUserRequestAction,
  GetCurrentUserRequestAction,
} from "@src/app/store/modules/user/user.actions";
import { MatDialog } from "@angular/material";

import { filter, map, distinctUntilChanged } from "rxjs/operators";
import { StudentInterface } from "@src/app/interfaces/students";
import {
  TeacherInterface,
  TeacherProductInterface,
} from "@src/app/interfaces/teachers";
import { CardDetailInterface } from "@src/app/interfaces/cards";
import { ConfirmationDialogComponent } from "@src/app/components/modals/confirmation-dialog/confirmation-dialog.component";
import { SpinnerOverlayService } from "@src/app/services/spinner-overlay/spinner-overlay.service";
import { resetForm, checkEdited } from "../../../helpers";
import { UnsubscribeFromTeacherRequestAction } from "@src/app/store/modules/students/students.actions";
import {
  selectStudentsStatus,
  selectStudentsState,
  selectStudentsSubscriptionStatus,
} from "@src/app/store/modules/students/students.selectors";
import { RouteNames } from "@src/app/route-names";
import { SubscriptionStatus } from "@src/app/store/modules/students/students.types";

@Component({
  selector: "app-student-account-component",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"],
})
export class StudentAccountComponent implements OnInit, OnDestroy {
  // Request statuses
  public requestStatus = RequestStatus;
  public routeNames = RouteNames;

  // Forms
  public contactDetailsForm: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    telephone: ["", [Validators.required]],
  });
  public isContactDetailsFormEdited = false;

  public passwordForm: FormGroup = this.fb.group({
    password: "",
  });
  public pwBtnDisabledState = true;

  // Store
  public subscriptions: Subscription[] = [];

  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter((user) => Boolean(user))
  );
  public userStatus$: Observable<string> = this.store.pipe(
    select(selectUserStatus),
    filter((status) => Boolean(status))
  );

  public message$: Observable<any> = this.store.pipe(
    select(selectUserMessages)
  );

  public cards$: Observable<CardDetailInterface[]> = this.store.pipe(
    select(selectCards),
    filter((cards) => Boolean(cards))
    // map(cards => {
    //   return cards.filter(card => card.is_default);
    // })
  );

  public cardStatus$: Observable<CardDetailInterface[]> = this.store.pipe(
    select(selectCardsStatus),
    filter((status) => Boolean(status) && status !== RequestStatus.pending)
  );

  public studentStatus$: Observable<string> = this.store.pipe(
    select(selectStudentsStatus)
  );
  public studentsSubscriptionStatus$: Observable<any> = this.store.pipe(
    select(selectStudentsSubscriptionStatus),
    distinctUntilChanged()
  );

  public user: StudentInterface = null;
  public isUserSubscribed: boolean;
  public subscription: TeacherProductInterface;
  public subscriptionStatuses = SubscriptionStatus;
  public creator: TeacherInterface = null;
  public cards: CardDetailInterface[] = [];

  public currency = '';
  public status: string = null;
  public slug = "";
  public description = "";
  public message = "";
  public unsubscribing = false;
  public stripeFormShown = false;

  constructor(
    private store: Store<IAppState>,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    // showoverlay
    this.loadUserCardsList();

    this.subscriptions.push(
      this.contactDetailsForm.valueChanges.subscribe((formValues) => {
        this.isContactDetailsFormEdited = checkEdited(formValues, this.user);
      }),
      this.user$.subscribe((user) => {
        this.user = user;

        if (user.creators) {
          this.creator = user.creators[0].creator;
          this.isUserSubscribed = this.creator.subscribed.length > 0;
          this.subscription = this.creator.subscribed[0];
          this.currency = this.creator.currency;
          this.slug = this.creator.slug;
          this.description = this.creator.description;

          if (this.contactDetailsForm) {
            this.contactDetailsForm.controls.email.setValue(user.email);
            this.contactDetailsForm.controls.telephone.setValue(user.telephone);
          }

          this.spinner.hide();
        }
      }),

      this.userStatus$.subscribe((status) => {
        this.status = status;
        if (this.status !== this.requestStatus.pending) {
          this.spinner.hide();
        }
      }),

      this.message$.subscribe((message) => {
        if (message) {
          this.message = message.message || message;
          // console.log('GetCurrentUserRequestAction');
          this.store.dispatch(new GetCurrentUserRequestAction());
          resetForm(this.passwordForm);
          window.scrollTo(0, 0);
        }
      }),

      this.studentStatus$.subscribe((status) => {
        if (status && status !== RequestStatus.pending) {
          // console.log('hiding from account');
          // hideoverlay
        }

        if (this.unsubscribing) {
          // console.log('unsubscribed!');
          this.unsubscribing = false;
        }
      }),

      this.studentsSubscriptionStatus$.subscribe((subscriptionStatus) => {
        this.isUserSubscribed = !!subscriptionStatus;
        this.spinner.hide();
      }),

      this.cardStatus$.subscribe(() => {
        // hideoverlay
      }),

      this.cards$.subscribe((cards) => {
        this.cards = cards;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  loadUserCardsList() {
    this.store.dispatch(new GetUserCardsRequestAction());
  }

    saveContactDetails() {
      this.spinner.show();
      if (this.contactDetailsForm.valid) {
      const payload = {
        email: this.contactDetailsForm.get("email").value,
        telephone: this.contactDetailsForm.get("telephone").value,
      };
      this.updateUser(payload);
    }
  }

  savePassword() {
    if (this.passwordForm.valid) {
      const payload = {
        password: this.passwordForm.get("password").value,
      };
      this.updateUser(payload);
    }
  }

  updateUser(payload: { email?: any; telephone?: any; password?: any; }) {
    // showoverlay
    this.store.dispatch(new UpdateCurrentUserRequestAction(payload));
  }

  public removeCard(cardId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: "journeyinto-modal",
      data: { message: `Are you sure you want to delete this card?` },
    });
    dialogRef
      .afterClosed()
      .pipe(filter((result) => Boolean(result)))
      .subscribe(() => {
        // showoverlay
        this.store.dispatch(new RemoveUserCardRequestAction(cardId));
      });
  }

  public makeDefault(cardId: any) {
    // showoverlay
    this.store.dispatch(new MakeUserCardDefaultRequestAction(cardId));
  }

  public confirmUnsubscribeTeacher(teacher: { first_name: any; last_name: any; }): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      panelClass: "journeyinto-modal",
      data: {
        message: `Are you sure you want to unsubscribe from your teacher ${teacher.first_name} ${teacher.last_name}?`,
        buttonText: {
          ok: "YES",
          cancel: "NO",
        },
      },
    });

    dialogRef
      .afterClosed()
      .pipe(filter((result) => Boolean(result)))
      .subscribe(() => {
        this.unsubscribing = true;
        // showoverlay
        this.spinner.show();
        this.store.dispatch(new UnsubscribeFromTeacherRequestAction(teacher));
      });
  }

  public enableSaveButton($event: any) {
    this.pwBtnDisabledState = !$event;
  }

  public onStripeFormShown($event: boolean) {
    // console.log('stripe form shown: ', $event);
    this.stripeFormShown = $event;
  }
}
