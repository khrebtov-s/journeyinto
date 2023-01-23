import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { Subscription } from 'rxjs';
import { GetStudentsListByTeacherRequestAction } from '@src/app/store/modules/teachers/teachers.actions';
import { selectStudents, selectStudentsStatus, selectStudentsEntities } from '@src/app/store/modules/students/students.selectors';
import { ViewStatuses } from '@src/app/store/modules/user/user.types';
import { selectUserStatus, selectUserActive } from '@src/app/store/modules/user/user.selectors';
import { filter } from 'rxjs/operators';
import { SpinnerOverlayService } from '../../../../services';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public students$ = this.store.pipe(
    select(selectStudentsEntities),
    filter(students => Boolean(students) && Array.isArray(students))
  );

  public approved: any = [];
  public declined: any = [];

  // User view statuses - student or teacher
  public viewStatuses = ViewStatuses;

  constructor(
    private store: Store<IAppState>,
    public spinner: SpinnerOverlayService
  ) {}

  ngOnInit() {
    this.load();

    this.subscriptions.push(
      this.students$.subscribe((students: any[]) => {
        if (students.length) {
          this.approved = students.filter(student => student.status === 'approved');
          this.declined = students.filter(student => student.status === 'declined');
        }

        this.spinner.hide();
      })
    );
  }

  load() {
    this.store.dispatch(new GetStudentsListByTeacherRequestAction());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onStudentCtaClicked(student) {
    // console.log(student);
  }
}
