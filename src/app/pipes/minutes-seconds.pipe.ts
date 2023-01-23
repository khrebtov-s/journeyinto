import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(time: number): string {
    return moment()
      .set({ hour: 0, minute: 0, second: time, millisecond: 0 })
      .format('HH:mm:ss');
  }
}
