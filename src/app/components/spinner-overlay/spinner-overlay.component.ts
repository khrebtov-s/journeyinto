import { Component, OnInit, OnDestroy, AfterViewInit } from "@angular/core";
import { Subscription, Observable, pipe } from "rxjs";
import { select, Store } from "@ngrx/store";
import { selectText } from "@src/app/store/modules/spinner/spinner.selectors";
import { IAppState } from "@src/app/store/app.reducers";
import { selectTeachersObject } from "@src/app/store/modules/teachers/teachers.selectors";

@Component({
  selector: "app-spinner-overlay",
  templateUrl: "./spinner-overlay.component.html",
  styleUrls: ["./spinner-overlay.component.scss"],
})
export class SpinnerOverlayComponent
  implements OnInit, OnDestroy, AfterViewInit {
  public spinner$: Observable<any> = this.store.pipe(select(selectText));
  public subscriptions: Subscription[] = [];

  public isAddText = false;
  public progress$: Observable<any> = this.store.pipe(
    select(selectTeachersObject)
  );
  progress = 0;
  uploadError = false;
  errorText = ''

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.spinner$.subscribe((obj: any) => {
        obj.textAboutClass && (this.isAddText = true);
      })
    );

    this.subscriptions.push(
      this.progress$.subscribe((obj: any) => {
        // console.log('tut', obj);
        
        this.progress = obj.progress;

        if (obj.uploadError) {
          this.isAddText = false;
          this.uploadError = true;
          this.errorText = obj.textErrorMessage
        }
      })
    );

    // this.subscriptions.push(
    //   this.progress$.subscribe((obj: any) => {
    //     if (obj.classUploadingError) {
    //       this.isAddText = false;
    //       this.uploadError = true;
    //     }
    //   })
    // );
  }

  ngAfterViewInit() {}

  ngOnDestroy(): void {}
}
