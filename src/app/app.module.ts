import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/components/app/app.component';
import { SpinnerOverlayModule } from '@src/app/components/spinner-overlay/spinner-overlay.module';
import { appReducers, metaReducers, REDUCER_TOKEN } from '@src/app/store/app.reducers';
import { AngularFireModule } from '@angular/fire';
import { DeviceDetectorModule } from 'ngx-device-detector';

import {
  AuthenticationEffects,
  SignUpEffects,
  ForgottenPasswordEffects,
  UserEffects,
  OnboardingEffects,
  TeachersEffects,
  NotificationEffects,
  PosesEffects,
  AudioRecordingEffects,
  RecordingEffects,
  StudentsEffects,
  CardsEffects,
  StripeEffects
} from '@src/app/store/app.effects';

import {
  AuthenticationService,
  AuthorizationService,
  SignUpService,
  ForgottenPasswordService,
  OnboardingService,
  UserService,
  ErrorsService,
  SpinnerOverlayService,
  TeacherService,
  StripeService,
  VideoService
} from './services';
import { JwtTokenInterceptor } from '@src/app/interceptors/jwt-token.interceptor';
import { HttpErrorsInterceptor } from '@src/app/interceptors/http-errors.interceptor';
import { ApiMockInterceptor } from '@src/app/interceptors/api-mock.interceptor';
import { PrivateRouteGuard } from '@src/app/guards/private-route.guard';
import { GuestRouteGuard } from '@src/app/guards/guest-route.guard';
import { environment } from '@src/environments/environment';
import { ActivationStart, Router, ActivationEnd, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SetTitleSharedAction, SetCanGoBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { AddCardButtonModule } from '@src/app/components/add-card-button/add-card-button.module';
import { DexieService } from './services/local-db/dexie.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UtilsService } from './services/utils.service';


@NgModule({
  imports: [
    DeviceDetectorModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    StoreModule,
    FlexLayoutModule,
    AppRoutingModule,
    SpinnerOverlayModule,
    AddCardButtonModule,
    StoreModule.forRoot(REDUCER_TOKEN, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
      metaReducers
    }),
    StoreRouterConnectingModule.forRoot(),
    // register all ngrx effects
    EffectsModule.forRoot([
      AuthenticationEffects,
      SignUpEffects,
      ForgottenPasswordEffects,
      UserEffects,
      OnboardingEffects,
      TeachersEffects,
      NotificationEffects,
      PosesEffects,
      AudioRecordingEffects,
      RecordingEffects,
      StudentsEffects,
      CardsEffects,
      StripeEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
    ...(environment.mock
      ? {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiMockInterceptor,
          multi: true
        }
      : ([] as any)),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true },
    {
      provide: REDUCER_TOKEN,
      useValue: appReducers
    },
    AuthenticationService,
    AuthorizationService,
    ErrorsService,
    DexieService,
    SpinnerOverlayService,
    SignUpService,
    ForgottenPasswordService,
    OnboardingService,
    TeacherService,
    UserService,
    StripeService,
    VideoService,
    PrivateRouteGuard,
    GuestRouteGuard,
    Title,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {
  timer;

  public constructor(
    private router: Router,
    private store: Store<any>,
    private utils: UtilsService,
    private spinner: SpinnerOverlayService
  ) {
    this.log('INIT APP MODULE');
    
    this.router.events
      .subscribe((event: any) => {
        const snapshot = event.snapshot;
        if (event instanceof ActivationEnd) {
          if (snapshot.data.hasOwnProperty('title')) {
            this.log('Dispatching set title: ', snapshot.data.title);
            this.store.dispatch(new SetTitleSharedAction(snapshot.data.title));
          }

          if (snapshot.data.hasOwnProperty('goBack')) {
            this.log('Dispatching whether we can go back: ', snapshot.data.goBack);
            this.store.dispatch(new SetCanGoBackSharedAction(snapshot.data.goBack));
          }
        }

        // if (event instanceof NavigationEnd) {
        //   this.log('spinner NAVIGATION END!');
        //   if (this.timer) {
        //     clearTimeout(this.timer);
        //     this.timer = null;
        //   }

        //   this.timer = setTimeout(() => {
        //     window.scrollTo(0, 0);
        //   }, 100);
        // }

        if (event instanceof NavigationStart) {
          this.log('spinner NAVIGATION START!');
          this.log('show spinner');
          this.spinner.show();
        }

        return;
      });
  }

  log(text, ...args) {
    this.utils.logall(text, this.constructor.name, args);
  }

}