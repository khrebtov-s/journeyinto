import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  public logColors = {
    AppModule: { bg: '#DEFFB8', color: '#FF0FB8' },
    AudioRecordingEffects: { bg: '#FDE3A7', color: '#333' },
    AudioRecordingService: { bg: '#FFAC9C', color: '#333' },
    ClassRecordingComponent: { bg: '#83A24B', color: '#ffffff' },
    DexieService: { bg: '#39D5FF', color: '#333' },
    HeaderDefaultComponent: { bg: '#ACFF70', color: '#0C1370' },
    LayoutDefaultComponent: { bg: '#0C1370', color: '#ffffff' },
    MenuComponent: { bg: '#17A27D', color: '#ffffff' },
    ProfileComponent: { bg: '#C6ED69', color: '#16A13B' },
    PublicTeacherProfileComponent: { bg: '#E0FFFF', color: '#6495ed' },
    RecordComponent: { bg: '#333', color: '#8EFFC1' },
    RecordingsComponent: { bg: '#9F86C0', color: '#6CFFD8' },
    RecordEditAudioComponent: { bg: '#FFD4F5', color: '#0C1370' },
    RecordEditRecordingComponent: { bg: '#DA3C78', color: '#ffffff' },
    RecordViewComponent: { bg: '#3D4B23', color: '#ffffff' },
    SpinnerOverlayService: { bg: '#FFA737', color: '#ffffff' },
    TeacherProfileComponent: { bg: '#8A4FB8', color: '#ffffff' },
    TeachersProfileComponent: { bg: '#6CFFD8', color: '#B34827' },
    TeacherProfileFormComponent: { bg: '#14C4A7', color: '#ffffff' },
    UserEffects: { bg: '#FFAA00', color: '#333' }
  };

  public activeLogs = [
    // 'AppModule',
    // 'UserEffects',
    // 'MenuComponent',
    // 'HeaderDefaultComponent',
    // 'TeacherProfileComponent', // private teacher profile view
    // 'TeachersProfileComponent', // public teachers profile view
    // 'TeacherProfileFormComponent',
    // 'PublicTeacherProfileComponent',
    // 'ProfileComponent',
    // 'AudioRecordingEffects',
    // 'AudioRecordingService',
    // 'DexieService',
    // 'RecordComponent',
    // 'RecordingsComponent',
    // 'RecordEditRecordingComponent',
    // 'RecordEditAudioComponent',
    // 'ClassRecordingComponent',
    // 'RecordViewComponent'
    // 'SpinnerOverlayService',
  ];

  public copyTextToClipboard(text: string) {
    const element = document.createElement('textarea');
    element.style.position = 'fixed';
    element.style.left = '0';
    element.style.top = '0';
    element.style.right = '0';
    element.style.bottom = '0';
    element.style.opacity = '0';
    element.value = text;
    document.body.appendChild(element);
    element.focus();
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
  }

  public getUuid() {
    return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  }

  /*
    CONSOLE LOG WITH COLORS!!
  */
  public log(text, className, ...args) {
    this.doLog(text, className, args);
  }

  public logall(text, className, ...args) {
    this.doLog(text, className, args, 'all');
  }

  private doLog(text, className, args, type = 'one') {
    if (
      this.activeLogs.includes(className)
      // true
    ) {
      let css = '';

      if (this.logColors[className]) {
        css = `background-color: ${this.logColors[className].bg}; color: ${this.logColors[className].color}`;
      }

      if (args.length > 0) {
        if (type === 'all') {
          console.log(`%c ${className} => ${text}`, css, ...args);
        } else {
          console.log(`%c ${className} => ${text}`, css, args);
        }
      } else {
        console.log(`%c ${className} ${text}`, css);
      }
    }
  }

  public isIos() {
    const win: any = window;
    return (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
      !win.MSStream;
  }

  /**
   * marking for Subscribe student before sign up
   */
  private _studentSubscribed: boolean = false;

  get suscriptionOnTeacher(): boolean {
    return this._studentSubscribed;
  }
  set suscriptionOnTeacher(value: boolean) {
    this._studentSubscribed = value;
  }
}
