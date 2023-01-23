import { Component, forwardRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import {
    ControlValueAccessor,
    NG_VALUE_ACCESSOR,
    FormGroup,
    FormControl,
    Validators,
    AbstractControl
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { filter } from 'rxjs/operators';
import { RequestStatus } from '@src/app/services/api.service.interface';
import { selectUserStatus } from '@src/app/store/modules/user/user.selectors';
import { Subscription } from 'rxjs';


const lower = /[a-z]/;
const upper = /[A-Z]/;
const numbers = /[0-9]/;


const CUSTOM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordMatchInputComponent),
    multi: true,
};

@Component({
    selector: 'app-password-match-input',
    providers: [CUSTOM_VALUE_ACCESSOR],
    templateUrl: './password-match-input.component.html',
    styleUrls: ['./password-match-input.component.scss']
})
export class PasswordMatchInputComponent implements ControlValueAccessor, OnInit, OnDestroy {
    @Output() passwordFormValid = new EventEmitter<boolean>();
    private level: string;
    public disabled: boolean;
    private onChange: Function;
    private onTouched: Function;

    public subscriptions: Subscription[] = [];
    public status$ = this.store.pipe(
        select(selectUserStatus),
        filter(status => Boolean(status) && status === RequestStatus.success)
    );

    password = new FormControl('', [
        // Validators.required,
        Validators.minLength(8)
        // control => this.passwordValidator(control)
    ]);
    confirmPassword = new FormControl('', [
        // Validators.required,
        control => this.matchValidator(control)
    ]);

    public form = new FormGroup({
        password: this.password,
        confirmPassword: this.confirmPassword
    });

    constructor(
        private store: Store<IAppState>
    ) {
        this.onChange = (_: any) => { };
        this.onTouched = () => { };
        this.disabled = false;

        this.form.valueChanges.subscribe(
            _ => this.checkValue()
        );
    }

    ngOnInit() {
        this.subscriptions.push(
            this.status$.subscribe(status => {
            })
        );
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    public isActive(value: string): boolean {
        return value === this.level;
    }


    public checkValue() {
        // if the passwords are valid, update the control value to match the password value (if form is valid both passwords must match)
        if (this.form.valid) {
            this.onChange(this.password.value);
        } else {
            this.onChange(null);
        }

        const isPasswordFormValid = Boolean(this.password.value
            && this.confirmPassword.value
            && this.form.valid);
        this.passwordFormValid.emit(isPasswordFormValid);

        this.onTouched();
    }

    writeValue(value: any): void {
        this.form.setValue({
            password: value,
            confirmPassword: value
        });
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    matchValidator(control: AbstractControl) {
        if (control.value && this.password.value !== control.value) {
            return { mismatch: true };
        }
    }

    passwordValidator(control: AbstractControl) {
        if (control.value) {
            const password = control.value;

            if (password.length < 8) {
                return { length: true };
            }
        }
    }

}
