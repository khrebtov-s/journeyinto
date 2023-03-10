import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {
    transform(
        text: string,
        limit = 140,
        preserveTags = true,
        wordBreak = false,
        suffix = '...',
        moreLink = ''
    ): string {

        const arr = text.replace(/</g, '\n<')
            .replace(/>/g, '>\n')
            .replace(/\n\n/g, '\n')
            .replace(/^\n/g, '')
            .replace(/\n$/g, '')
            .split('\n');

        let sum = 0
        let row;
        let rowCut;
        let cut;
        let add;
        let tagMatch;
        let tagName;
        let more = false;
        const tagStack = [];

        for (let i = 0; i < arr.length; i++) {

            row = arr[i];
            // count multiple spaces as one character
            rowCut = row.replace(/[ ]+/g, ' ');

            if (!row.length) {
                continue;
            }

            if (row[0] !== '<') {

                if (sum >= limit) {
                    row = '';
                } else if ((sum + rowCut.length) >= limit) {

                    cut = limit - sum;

                    if (row[cut - 1] === ' ') {
                        while (cut) {
                            cut -= 1;
                            if (row[cut - 1] !== ' ') {
                                break;
                            }
                        }
                    } else {

                        add = row.substring(cut).split('').indexOf(' ');

                        // break on halh of word
                        if (!wordBreak) {
                            if (add !== -1) {
                                cut += add;
                            } else {
                                cut = row.length;
                            }
                        }
                    }

                    row = row.substring(0, cut) + suffix;

                    if (moreLink) {
                        row += '<a href="' + moreLink + '" style="display:inline">??</a>';
                    }

                    sum = limit;
                    more = true;
                } else {
                    sum += rowCut.length;
                }
            } else if (!preserveTags) {
                row = '';
            } else if (sum >= limit) {

                tagMatch = row.match(/[a-zA-Z]+/);
                tagName = tagMatch ? tagMatch[0] : '';

                if (tagName) {
                    if (row.substring(0, 2) !== '</') {

                        tagStack.push(tagName);
                        row = '';
                    } else {

                        while (tagStack[tagStack.length - 1] !== tagName && tagStack.length) {
                            tagStack.pop();
                        }

                        if (tagStack.length) {
                            row = '';
                        }

                        tagStack.pop();
                    }
                } else {
                    row = '';
                }
            }

            arr[i] = row;
        }

        return arr.join('\n').replace(/\n/g, '');
    }
}
