///<reference path="../../../../node_modules/@angular/core/core.d.ts"/>
import { AfterViewInit, Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { SendStripeTokenRequestAction, GetUserCardsRequestAction } from '@src/app/store/modules/cards/cards.actions';
import { environment } from '@src/environments/environment';
import { SubscribeToTeacherRequestAction, PurchaseTeacherClassRequestAction, GetStudentsListRequestAction } from '@src/app/store/modules/students/students.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { selectCardsStatus, selectCardsEntities, selectCards } from '@src/app/store/modules/cards/cards.selectors';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/index';
import { selectStudentsStatus, selectStudentsEntities } from '@src/app/store/modules/students/students.selectors';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { RecordingInterface } from '@src/app/interfaces/recording';
declare const Stripe;
const { publishableApiKey } = environment;

const stripeSettings = {
  style: {
    base: {
      fontSize: '16px',
      color: '#2f2f2f',
      fontFamily: '"Futura Std Light", sans-serif',
      fontWeight: '300',
      '::placeholder': {
        color: '#a7a7a7'
      }
    },
    invalid: {
      color: '#f44336'
    }
  },
  hideIcon: true,
  hidePostalCode: true
};

@Component({
  selector: 'app-card-button',
  templateUrl: './add-card-button.component.html',
  styleUrls: ['./add-card-button.component.scss']
})
export class AddCardButtonComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() public recording: RecordingInterface;
  @Input() public slug: string;
  @Output() public stripeFormShown = new EventEmitter<boolean>();

  public canSetDefault = false; // This is a fixed property that is just set right here.
    /*
      We are deciding that as a user you can ONLY add new payment methods that will become default.
      So this means that the toAccount form value should always be true.
      We manually set it right before form submit, in case we wanna change this logic in the future.
    */

  public showStripeForm = false;
  public stripeError = false;
  public paymentCardForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    toAccount: [true] // pre check this, since we are setting the card to be automatically the default card
  });
  public card = null;
  public subscriptions: Subscription[] = [];

  public studentStatus$ = this.store.pipe(
    select(selectStudentsStatus),
    filter(Boolean)
  );
  public student$ = this.store.pipe(
    select(selectStudentsEntities)
  );
  public cards$ = this.store.pipe(
    select(selectCards),
    // filter(cards => Boolean(cards))
  );
  public cardStatus$ = this.store.pipe(
    select(selectCardsStatus),
    filter(status => Boolean(status))
  );
  public userStatus$ = this.store.pipe(
    select(selectUserStatus),
    filter(Boolean)
  );

  currentCardCount = null;
  cards = [];
  cardStatus = null;

  hasSubscribed = false;

  constructor(
    private store: Store<IAppState>,
    private fb: FormBuilder,
    private spinnerOverlayService: SpinnerOverlayService
  ) {}

  ngOnInit() {
    this.subscriptions.push(
      this.cards$.subscribe(cards => {
        if (cards) {
          if (
            this.currentCardCount !== null
            && this.currentCardCount !== cards.length
          ) {
            this.store.dispatch(new GetUserCardsRequestAction());
          }

          this.cards = cards;
          this.currentCardCount = cards.length;

        }
      }),
      this.cardStatus$.subscribe(status => {
        this.cardStatus = status;
        if (status !== RequestStatus.pending) {
          this.showStripeForm = false;

          if (!this.slug) {
            // showoverlay
          }
        } else {
          // hideoverlay
        }
      }),
      this.studentStatus$.subscribe(status => {
        if (status === RequestStatus.pending) {
          // showoverlay
        } else {
          // hideoverlay
        }

        // if (status === RequestStatus.success) {
        //   this.store.dispatch(new GetCurrentUserRequestAction());
        // }
      }),
      this.student$.subscribe(student => {
        if (student && student.object && student.object == 'subscription' && !this.hasSubscribed) {
          this.hasSubscribed = true;
          this.store.dispatch(new GetCurrentUserRequestAction());
        }
      }),
      this.userStatus$.subscribe(status => {
        if (status !== RequestStatus.pending) {
          // hideoverlau
        } else {
          // showoverlay
        }
      })
    );
  }

  toggleFormShown() {
    this.showStripeForm = !this.showStripeForm;
    this.stripeFormShown.emit(this.showStripeForm);
  }

  initStripe() {
    if (Stripe) {
      const stripe = Stripe(publishableApiKey);
      const elements = stripe.elements({
        fonts: [{
          family: 'Futura Std Light',
          src: `url(${window.location.origin}/assets/fonts/futura-std_light.otf)`,
        }]
      });

      const card = elements.create('card', stripeSettings);
      card.mount('#card-element');
      card.addEventListener('change', ({ error }) => {
        this.handleStripeError(error);
      });

      // Create a token or display an error when the form is submitted.
      const form = document.getElementById('payment-form');

      form.addEventListener('submit', async event => {
        event.preventDefault();

        // we must create one token per request, since Stripe does NOT allow the same token to be used twice
        const newCardToken = await this.getStripeToken(stripe, card);

        if (newCardToken) {
          this.addUserCard(newCardToken);
        }

        if (this.slug) {
          if (this.recording) {
            this.buyClass();
          } else {
            const subscribeToken = await this.getStripeToken(stripe, card);
            if (subscribeToken) {
              this.subscribeToTeacher(subscribeToken);
            }
          }
        }

        this.toggleFormShown();
        this.paymentCardForm.reset();
        card.clear();
      });

      this.card = card;
    }
  }

  async getStripeToken(stripe, card) {
    const { name } = this.paymentCardForm.value;
    const { token, error } = await stripe.createToken(card, { name });

    this.handleStripeError(error);

    if (error) {
      return false;
    }
    return token.id;
  }

  handleStripeError(error) {
    const displayError = document.getElementById('card-errors');
    if (error) {
      displayError.textContent = error.message;
      this.stripeError = true;
    } else {
      this.stripeError = false;
      displayError.textContent = '';
    }
  }

  subscribeToTeacher(token) {
    if (this.slug) {
      this.spinnerOverlayService.show();
      this.store.dispatch(new SubscribeToTeacherRequestAction({ token, teacher_slug: this.slug }));
    }
  }

  buyClass() {
    if (this.slug && this.recording) {
      this.store.dispatch(new PurchaseTeacherClassRequestAction({
        teacher_slug: this.slug,
        recording_id: this.recording.id
      }));
    }
  }

  addUserCard(token) {
    const { toAccount } = this.paymentCardForm.value;
    const accountMark = Number(toAccount);
    this.store.dispatch(new SendStripeTokenRequestAction({ token, accountMark }));
  }

  ngAfterViewInit() {
    this.initStripe();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
