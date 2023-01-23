import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { Store } from '@ngrx/store';
import { IAppState } from '@src/app/store/app.reducers';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Length } from "tns-core-modules/ui/page";
import {
  AddVideoToClassAction,
} from "@src/app/store/modules/teachers/teachers.actions";
import { FileStatus, UploadService } from '@src/app/services/teacher/upload.service';
import { Observable } from 'rxjs';
@Component({
  selector: "app-class-media-uploading",
  templateUrl: "./class-media-uploading.component.html",
  styleUrls: ["./class-media-uploading.component.scss"],
})
export class ClassMediaUploadingComponent implements OnInit {
  @Input() user;
  @Input() status;
  @Input() requestStatus;
  @Input() title;
  @Input() buttonText;
  @Input() accept;
  @Input() videoDuration;

  @Input() set file(file: File) {
    if (file) {
      this.fileName = file.name;

      this.readURL(file);
      this.profileImageForm.patchValue({
        image: file,
      });
    }
  }

  @Output() profileImageUploaded: EventEmitter<any> = new EventEmitter();

  @Output() setDuration: EventEmitter<any> = new EventEmitter();

  @ViewChild("imagePreview", { static: false }) imagePreview: ElementRef;
  // @ViewChild("videoPreview", { static: false }) videoPreview: ElementRef;

  // Reactive form
  public profileImageForm: FormGroup = this.fb.group({
    image: ["", [Validators.required]],
  });

  public fileName = "";
  public videoPreview = "";
  public audioPreview = "";
  public ids: string[] = [];

  constructor(
    private store: Store<IAppState>,
    private fb: FormBuilder,
    private uploadService: UploadService
  ) {}

  ngOnInit() {
  }

  /**
   * On profile image file input change
   *
   * @param $event
   */

 
  // apiService(file, id) {
  //   const data = {
  //     id,
  //     file
  //   }
  //   this.store.dispatch(new AddVideoToClassAction(data));
  // }

  onProfileImageForm($event){
    // Get the selected file from event
    const file = $event.target.files[0];

    // const chunkSize = 4000000;

    // function getRandomId() {
    //   return Math.floor((Math.random()*12335430)+1);
    // }
    
    // for (let offset = 0; offset < file.size; offset += chunkSize){
    //   const chunk = file.slice( offset, offset + chunkSize );
    //   // this.apiService(chunk, getRandomId())
    // }
    // this.uploadService.uploadFile(file, file.name);

    if (file) {
      // Update form value
      this.profileImageForm.patchValue({
        image: file,
      });

      this.fileName = file.name;
      this.profileImageUploaded.emit(file);

      this.readURL(file);
    }
  }

  setFileInfo(event) {
    let attachedFile = <File>event.target.files[0];

    let duration: any;

    let video = document.createElement("video");
    video.preload = "metadata";

    const setData = (videoDuration) => {
      this.setDuration.emit(videoDuration);
    };

    video.onloadedmetadata = function() {
      window.URL.revokeObjectURL(video.src);
      setData(video.duration);
      duration = video.duration;
    };

    video.src = URL.createObjectURL(attachedFile);
  }

  readURL(file) {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      if (file.type.includes("mp4")) {
        this.videoPreview = file.name;
        this.audioPreview = file.name;
      } else if (file.type.startsWith("image")) {
        this.imagePreview &&
          (this.imagePreview.nativeElement.src = e.target.result);
      } else if (file.type.startsWith("video")) {
        this.videoPreview = file.name;
      } else {
        this.audioPreview = file.name;
      }
    };

    reader.readAsDataURL(file);
  }
}
