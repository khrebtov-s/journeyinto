import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IAppState } from '@src/app/store/app.reducers';
import { selectUserActive, selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { GetUserCardsRequestAction, MakeUserCardDefaultRequestAction, CardsActionTypes } from '@src/app/store/modules/cards/cards.actions';
import { selectCards, selectCardsStatus, selectCardStatusActions } from '@src/app/store/modules/cards/cards.selectors';
import { filter, map } from 'rxjs/operators';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { CardDetailInterface } from '@src/app/interfaces/cards';
import { SpinnerOverlayService } from '@src/app/services/spinner-overlay/spinner-overlay.service';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { StudentInterface } from '@src/app/interfaces/students';
import { RouteNames } from '@src/app/route-names';
import { SubscribeToTeacherRequestAction, PurchaseTeacherClassRequestAction, StudentsActionTypes } from '@src/app/store/modules/students/students.actions';
import { GetCurrentUserRequestAction } from '@src/app/store/modules/user/user.actions';
import { Router } from '@angular/router';
import { SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';

@Component({
  selector: 'app-student-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class StudentSubscriptionComponent implements OnInit, OnDestroy {
  public routeNames = RouteNames;
  public isSubscribed = false;
  public hasBoughtClass = false;

  public user$: Observable<StudentInterface> = this.store.pipe(
    select(selectUserActive),
    filter(user => Boolean(user))
  );
  public cards$: Observable<CardDetailInterface[]> = this.store.pipe(
    select(selectCards),
    filter(cards => Boolean(cards))
  );

  public user: StudentInterface = null;
  public creator: TeacherInterface = null;
  public cards: CardDetailInterface[] = [];
  public slug: string = '';
  public subscriptions: Subscription[] = [];
  public cardStatus$: Observable<string> = this.store.pipe(
    select(selectCardsStatus),
    filter(status => Boolean(status))
  );
  public userStatus$: Observable<string> = this.store.pipe(
    select(selectUserStatus),
    filter(status => Boolean(status) && status === RequestStatus.success)
  );

  public cardsStatusAction$ = this.store.pipe(
    select(selectCardStatusActions),
    filter(Boolean)
  );

  classBought: any;
  cardSelected = false;

  constructor(
    private store: Store<IAppState>,
    private spinner: SpinnerOverlayService,
    private router: Router
  ) {
    this.classBought = history.state.data && history.state.data.classBought ? history.state.data.classBought : false;
  }

  ngOnInit() {
    this.store.dispatch(new SetBackSharedAction(['/', RouteNames.student, RouteNames.myPractice]));

    // showoverlay
    this.loadUserCardsList();

    this.subscriptions.push(
      this.user$.subscribe(user => {
        // hideoverlay

        this.user = user;
        // console.log(this.user);
        
        if (user.creators && user.creators.length) {
          this.creator = {
            ...user.creators[0].creator,
          };

          // hideoverlay
          // console.log(this.creator, {user});
          if (this.creator && this.creator.slug) {
            this.spinner.hide();

            this.isSubscribed = this.creator && Array.isArray(this.creator.subscribed) && this.creator.subscribed.length > 0;

            // if (!this.creator.product) {
              // this.creator.product = {
              //   frequency: 'monthly',
              //   cost: 23.99
              // };
              // console.log(this.creator);
              
            // }
            
            this.slug = this.creator.slug;
  
            if (this.classBought) {
              // console.log('CLASSBOUGHT:', this.classBought);

              this.hasBoughtClass = !!this.creator.classes.find(singleClass => {
                // if (singleClass.id === this.classBought.id) {
                //   console.log('Found classbought in teacher classes: ', singleClass);
                // }
                return !!(singleClass.id === this.classBought.id && singleClass.is_bought);
              });
              // console.log('Has bought class: ', this.hasBoughtClass);
            }
            
          } else {
            this.store.dispatch(new GetCurrentUserRequestAction());
          }

        }
      }),
      this.cards$.subscribe(cards => {
        // console.log({cards});
        
        this.cards = cards;
      }),

      this.cardStatus$.subscribe(status => {
        if (status === RequestStatus.failure) {
          // hideoverlay
        }
      }),
      this.cardsStatusAction$.subscribe((statusAction: any) => {
        // console.log({statusAction});
        if (
          statusAction.action === CardsActionTypes.MAKE_USER_CARD_DEFAULT_SUCCESS
          && this.cardSelected
        ) {
          // console.log('card is now default');
          this.cardSelected = false;
          this.subscribeToTeacher();
        }
      })
    );
  }

  loadUserCardsList() {
    this.store.dispatch(new GetUserCardsRequestAction());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  subscribeWithExistingCard(card) {
    this.cardSelected = true;
    
    if (!card.is_default) {
      this.store.dispatch(new MakeUserCardDefaultRequestAction(card.id));
    } else {
      // if the user clicked on the already default card
      this.subscribeToTeacher();
    }
  }

  subscribeToTeacher() {
    if (this.classBought) {
      this.store.dispatch(new PurchaseTeacherClassRequestAction({
        teacher_slug: this.slug,
        recording_id: this.classBought.id
      }));

    } else {
      this.store.dispatch(new SubscribeToTeacherRequestAction({teacher_slug: this.slug}));
    }
  }
}
