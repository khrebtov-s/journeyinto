import { OnInit, Input, Component, OnDestroy, OnChanges, ViewChild, AfterViewInit, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { map, tap } from "rxjs/operators";
import { RouteNames } from "@src/app/route-names";

@Component({
    selector: 'app-ji-input',
    templateUrl: './ji-input.component.html',
    styleUrls: ['./ji-input.component.scss']
})
export class JiInputComponent implements OnInit, OnChanges, AfterViewInit {
    @ViewChild('inputEl', {static: false}) inputEl;
    @Input() input;
    @Input() title;
    @Input() id;
    @Input() type = 'text';
    @Input() hasError: boolean;
    @Input() errors;
    @Input() placeholder = 'Please enter';
    @Input() parentForm: FormGroup;
    @Input() customErrorText = {};
    @Input() value = '';
    @Input() isValid = false;
    @Input() explainerText = '';
    @Input() teachersLink: boolean;

    @Input() options = []; // if the type is 'select', we are going to need options

    @Output() teachersLinkChange: EventEmitter<any> = new EventEmitter();

    routeNames = RouteNames;
    errorsArray = [];
    defaultErrorText = {
        required: '',
        minLength: '',
        email: 'Please enter a valid email'
    };

    nonInputTypes = ['textarea', 'select'];
    isSimpleInputField = true;

    constructor() {}

    ngOnInit() {
        this.defaultErrorText.required = `${this.title} is required`;

        if (this.nonInputTypes.includes(this.type)) {
            this.isSimpleInputField = false;
        }
    }

    ngAfterViewInit() {}

    ngOnChanges() {
        if (this.errors) {
            this.errorsArray = Object.keys(this.errors).map(error => {
                let text;

                if (error === 'minlength') {
                    text = `${this.title} must be at least ${this.errors[error].requiredLength} characters long`;
                } else {
                    text = this.customErrorText[error] ?
                        this.customErrorText[error] :
                        this.defaultErrorText[error];
                }

                return {
                    type: error,
                    text
                };
            });
        }
    }
}