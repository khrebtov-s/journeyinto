import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { FormControl, FormBuilder } from '@angular/forms';
import { GetTeachersListRequestAction } from '@src/app/store/modules/teachers/teachers.actions';
import { selectTeachers, selectTeachersStatus, selectTeachersObject } from '@src/app/store/modules/teachers/teachers.selectors';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SpinnerOverlayService } from '../../services';

@Component({
  selector: 'app-teacher-search',
  templateUrl: './teacher-search.component.html',
  styleUrls: ['./teacher-search.component.scss']
})
export class TeacherSearchComponent implements OnInit, OnDestroy {
  @Input() selectable = false;

  public subscriptions: Subscription[] = [];

  public teachers$ = this.store.pipe(
    select(selectTeachersObject),
    filter(obj => Array.isArray(obj.teachers))
  );
  public teachersStatus$ = this.store.pipe(
    select(selectTeachersStatus),
    filter(Boolean)
  );

  public filter = new FormControl('');

  public filterForm = this.fb.group({
    filter: this.filter
  });

  public teachers: any = null;
  public filteredTeachers: any = [];
  public filterTimeout;

  constructor(
    private store: Store<IAppState>,
    public spinner: SpinnerOverlayService,
    private fb: FormBuilder
  ) {
    this.filter.valueChanges.subscribe(value => {
      const searchValue = value.toLowerCase();
      // showoverlay
      this.spinner.show();

      if (this.filterTimeout) {
        clearTimeout(this.filterTimeout);
      }

      this.filterTimeout = setTimeout(() => {
        // hideoverlay
        this.spinner.hide();

        this.filteredTeachers = this.teachers.filter(teacher => {
          return Object.values(teacher).some((val: any) => {
            if (val && typeof val === 'string') {
              return val.includes(searchValue);
            }
            return false;
          });
        });
      }, 1000);
    });
  }

  ngOnInit() {
    // get all the teachers
    this.store.dispatch(new GetTeachersListRequestAction());

    this.subscriptions.push(
      this.teachers$
        .subscribe(({teachers}) => {
          this.teachers = teachers;
          this.filteredTeachers = teachers;
          this.spinner.hide();
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clearSearch() {
    this.filter.setValue('');
  }
}
