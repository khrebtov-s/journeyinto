import { Component, OnInit, ViewChildren, QueryList, Input, OnDestroy } from '@angular/core';
import { FormOptionInterface } from '@src/app/interfaces/form-options';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { formValidationScrollFocus } from '../../helpers';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { UpdateTeacherRequestAction } from '@src/app/store/modules/teachers/teachers.actions';
import { Observable } from 'rxjs';
import { selectTeachersStatus } from '@src/app/store/modules/teachers/teachers.selectors';
import { filter } from 'rxjs/operators';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { SpinnerOverlayService } from '../../services';
import { TeacherInterface } from '@src/app/interfaces/teachers';
import { StudentInterface } from '@src/app/interfaces/students';
import { selectUserActive } from '@src/app/store/modules/user/user.selectors';

@Component({
    selector: 'app-teacher-stripe-form',
    templateUrl: 'teacher-stripe-form.component.html',
    styleUrls: ['teacher-stripe-form.component.scss']
})

export class TeacherStripeFormComponent implements OnInit, OnDestroy {
    @ViewChildren('validatedField') formFields: QueryList<any>;
    
    @Input() showForm = true;
    @Input() introText = '';

    // public creator_type = new FormControl('', [Validators.required]);
    // public stripePlanForm: FormGroup = this.fb.group({
    //     creator_type: this.creator_type,
    //     subscription_cost: ['', [Validators.required]],
    //     subscription_frequency: ['', [Validators.required]],
    //     subscription_free_trial_days: ['', [Validators.required]]
    // });
    // public submitted = false;

    // // Creator type options
    // public creator_typeOptions: FormOptionInterface[] = [
    //     {
    //         id: 1,
    //         value: 'individual',
    //         label: 'Individual'
    //     },
    //     {
    //         id: 2,
    //         value: 'company',
    //         label: 'Business'
    //     }
    // ];

    // // Subscription frequency options
    // public subscription_frequencyOptions: FormOptionInterface[] = [
    //     {
    //         id: 1,
    //         value: 'weekly',
    //         label: 'Weekly'
    //     },
    //     {
    //         id: 2,
    //         value: 'monthly',
    //         label: 'Monthly'
    //     }
    // ];

    public subscriptions = [];
    public user$: Observable<StudentInterface> = this.store.pipe(
        select(selectUserActive),
        filter(user => Boolean(user))
    );
    public teacherStatus$: Observable<string> = this.store.pipe(
        select(selectTeachersStatus),
        filter(status => Boolean(status))
    );

    public user: StudentInterface = null;

    constructor(
        private fb: FormBuilder,
        private store: Store<IAppState>,
        private spinner: SpinnerOverlayService
    ) { }

    ngOnInit() {
        this.subscriptions.push(
            this.user$.subscribe(
                user => {
                    window.scrollTo(0, 0);
                    this.user = user;
                }
            ),
            this.teacherStatus$.subscribe(
                status => {
                    if (status !== RequestStatus.pending) {
                        // hideoverlay
                    } else {
                        // showoverlay
                    }
                }
            )
        )
    }

    // handleSubmit() {
    //     this.submitted = true;
    //     this.stripePlanForm.markAllAsTouched();

    //     if (this.stripePlanForm.invalid) {
    //         formValidationScrollFocus(this.stripePlanForm, this.formFields);
    //         return;
    //     }

    //     // build formdata
    //     const payload = new FormData();
    //     for (const control of Object.keys(this.stripePlanForm.controls)) {
    //         const val = this.stripePlanForm.get(control).value;
    //         payload.append(control, val);
    //     }

    //     payload.forEach(field => console.log(field));

    //     this.store.dispatch(new UpdateTeacherRequestAction(payload));
    // }

    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe());
    }

}