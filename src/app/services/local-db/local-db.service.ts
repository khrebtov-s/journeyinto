import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class LocalDbService {
  private db: NgxIndexedDB;
  private storageName = 'recording-storage';

  public count: any;

  constructor() {
    this.db = new NgxIndexedDB('audio-recording-storage', 1);

    this.db.openDatabase(1, evt => {
      let objectStore = evt.currentTarget.result.createObjectStore(this.storageName, {
        keyPath: 'id',
        autoIncrement: true
      });

      objectStore.createIndex('recordingId', 'recordingId', { unique: true });
      objectStore.createIndex('recordingBlob', 'recordingBlob', { unique: true });
      objectStore.createIndex('recordingFileName', 'recordingFileName', { unique: true });
    });
  }

  add(value: any, recordingId: number, fileName: string) {
    // console.log('add storage', this.storageName)
    // console.log(recordingId,fileName)
    return this.db.add(this.storageName, { 
      recordingId: recordingId, 
      recordingBlob: value,
      recordingFileName: fileName
    })
  }

  getByKey(key: number) {
    return this.db.openDatabase(1).then(() => {
      return this.db.getByKey(this.storageName, key);
    });
  }

  delete(key: number) {
    this.db.delete(this.storageName, key);
  }
}
