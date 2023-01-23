import Dexie from 'dexie';
import { UtilsService } from '../utils.service';

export class DexieService extends Dexie {

  constructor() {
    super('journeyinto');

    this.version(1).stores({
      jirecordings: '++id, status, recordingId, time',
      jirecordingstatus: '++id, recordingId&'
    });
    // this.version(2).stores({
    //   jirecordings: '++id, status, recordingId, time',
    //   jirecordingstatus: 'recordingId&, status'
    // });

    this.open().then((db) => {
      // Database opened successfully
      this.log('DEXIE database open!', db);
    }).catch ((err) => {
      // Error occurred
      this.log('database NOT open! error !!!', err);
    });
  }

  async persist() {
    this.log('PERSIST FUNC', navigator.storage);

    return await navigator.storage && navigator.storage.persist &&
      navigator.storage.persist();
  }

  async isStoragePersisted() {
    return await navigator.storage && navigator.storage.persisted &&
      navigator.storage.persisted();
  }

  async showEstimatedQuota() {
    if (navigator.storage && navigator.storage.estimate) {
      const estimation = await navigator.storage.estimate();
      this.log(`Quota: ${estimation.quota}`);
      this.log(`Usage: ${estimation.usage}`);
    } else {
      console.error('StorageManager not found');
    }
  }

  async tryPersistWithoutPromtingUser() {
    this.log('NAVIGATOR? ', navigator);

    if (!navigator.storage || !navigator.storage.persisted) {
      return 'never';
    }

    let persisted = await navigator.storage.persisted();
    if (persisted) {
      return 'persisted';
    }
    if (!(navigator as any).permissions || !(navigator as any).permissions.query) {
      return 'prompt'; // It MAY be successful to prompt. Don't know.
    }
    const permission = await (navigator as any).permissions.query({
      name: 'persistent-storage'
    });
    if (permission.status === 'granted') {
      persisted = await navigator.storage.persist();
      if (persisted) {
        return 'persisted';
      } else {
        throw new Error('Failed to persist');
      }
    }
    if (permission.status === 'prompt') {
      return 'prompt';
    }
    return 'never';
  }

  private log(text, ...args) {
    const utilsService = new UtilsService();
    utilsService.log(text, this.constructor.name, ...args);
  }
}
