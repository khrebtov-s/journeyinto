import { JiInputComponent } from "../components/forms/ji-input/ji-input.component";

export const urlValidator = '(Https?://)?(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

export const formValidationScrollFocus = (form, formfields) => {
    const array = [];

    formfields._results.map(result => {
        if (result instanceof JiInputComponent) {
            array.push(result.inputEl);
        }
    });

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const nativeEl = element.nativeElement;
        const control = nativeEl.htmlFor;

        if (form.controls[control].invalid) {
            nativeEl.focus();
            window.scrollTo(0, nativeEl.offsetTop);
            break;
        }
    }
};

export const resetForm = (form) => {
    form.reset();
    const formInputs = Object.keys(form.controls);
    formInputs.map(input => {
        form.controls[input].markAsPristine();
        form.controls[input].markAsUntouched();
    });
};

/**
 * Get a form and the item that is being edited, and check
 * whether its values have been changed.
 * This would normally be used to check whether a button can be enabled or not
*/
export const checkEdited = (form, editing) => {
    if (!editing) {
        return false;
    }

    const formInputs = Object.keys(form);
    const changed = [];
    formInputs.map(input => {
        const editingValue = editing[input];
        const formValue = form[input];

        if (editingValue !== undefined) {
            changed.push(formValue !== editingValue);
        }
    });

    const hasChanged = changed.some((x) => !!x);
    return hasChanged;
};
