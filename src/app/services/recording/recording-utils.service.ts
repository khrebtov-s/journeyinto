import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { RecordingInterface } from '@src/app/interfaces/recording';

@Injectable({
  providedIn: 'root'
})
export class RecordingUtilsService extends ApiService {
  public getRecordingDuration(recording: RecordingInterface, audio: any) {
    let start = 0;
    let end = audio.duration;

    if (recording.start_timestamp) {
        start = +recording.start_timestamp;
    }

    if (recording.end_timestamp) {
        end = +recording.end_timestamp;
    }

    return end - start;

  }
}
