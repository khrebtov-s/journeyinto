import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { SetTitleSharedAction, SetBackSharedAction } from '@src/app/store/modules/shared/shared.actions';
import { IAppState } from '@src/app/store/app.reducers';
import { Subscription } from 'rxjs';
import { selectStudentsEntities, selectStudentsStatus } from '@src/app/store/modules/students/students.selectors';
import { filter } from 'rxjs/operators';
import { SpinnerOverlayService } from '@src/app/services';
import { GetStudentsListByTeacherRequestAction } from '@src/app/store/modules/teachers/teachers.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteNames } from '@src/app/route-names';

@Component({
  selector: 'app-students-item',
  templateUrl: './students-item.component.html',
  styleUrls: ['./students-item.component.scss']
})
export class StudentsItemComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public students$ = this.store.pipe(
    select(selectStudentsEntities),
    filter(Boolean),
    filter((students: any) => {
      const isStudentArray = Array.isArray(students);
      if (
        !isStudentArray
        && this.studentStatus !== 'pending'
      ) {
        this.store.dispatch(new GetStudentsListByTeacherRequestAction());
      }

      return isStudentArray && students.length > 0;
    })
  );
  public studentsStatus$ = this.store.pipe(
    select(selectStudentsStatus),
    filter(Boolean)
  );

  private studentStatus;
  public student;
  public studentDeets;

  constructor(
    private store: Store<IAppState>,
    public spinner: SpinnerOverlayService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new SetBackSharedAction(['/', RouteNames.teacher, RouteNames.students]));

    this.subscriptions.push(
      this.students$.subscribe(students => {
        this.student = students.find(student => {
          return student.user === +this.route.snapshot.paramMap.get('id');
        });

        if (!this.student) {
          this.router.navigate(['/', RouteNames.notFound]);
        } else {
          this.studentDeets = this.student.student.user;

          // hideoverlay
          // console.log('hide spinner');
          this.spinner.hide();
        }
      }),
      this.studentsStatus$.subscribe(
        status => {
          this.studentStatus = status;
          if (status === 'pending') {
            // showoverlay
          } else {
            // hideoverlay
          }
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  handleApproveDeclineClick() {
    // console.log('clicked!');
  }
}
