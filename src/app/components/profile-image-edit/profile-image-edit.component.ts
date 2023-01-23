import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-image-edit',
  templateUrl: './profile-image-edit.component.html',
  styleUrls: ['./profile-image-edit.component.scss']
})
export class ProfileImageEditComponent implements OnInit {
  @Input() user;
  @Input() status;
  @Input() requestStatus;

  @Input() set file(file: File) {

    if (file) {
      this.fileName = file.name;

      this.readURL(file);
      this.profileImageForm.patchValue({
        image: file
      });
    }
  }

  @Output() profileImageUploaded: EventEmitter<any> = new EventEmitter();

  @ViewChild('imagePreview', { static: false }) imagePreview: ElementRef;

  // Reactive form
  public profileImageForm: FormGroup = this.fb.group({
    image: ['', [Validators.required]]
  });

  public fileName = '';

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {}

  /**
   * On profile image file input change
   *
   * @param $event
   */
  onProfileImageForm($event): void {
    // Get the selected file from event
    const file = $event.target.files[0];

    if (file) {
      // Update form value
      this.profileImageForm.patchValue({
        image: file
      });

      this.fileName = file.name;

      this.profileImageUploaded.emit(file);

      this.readURL(file);

    }
  }

  readURL(file) {
    const reader = new FileReader();
    reader.onload = (e:any) => {
      this.imagePreview.nativeElement.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }

}
