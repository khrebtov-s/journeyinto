import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VideoService {

    public checkVimeoVideoURL(url: string): boolean {
        const regex = /^(http:\/\/|https:\/\/)(player.vimeo\.com)\/([\w\/]+)([\?].*)?$/igm;
        return regex.test(url);
    }

}
