import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "getParsedTextWithHref" })
export class GetParsedTextWithHref implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      console.error("can not parse", value);
      return "";
    }
  
    const pattern = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,3}(:[0-9]{1,5})?(\/.*)?$/gm;

    pattern.lastIndex = 0;
    const regExpForSplit = /\s/gm;
    const brTagRegExp = /<br>*/gm;
  
    const parsedText = value
      .replace(brTagRegExp, " <br> ")
      .split(regExpForSplit)
      .map((word) => {
        if (pattern.test(word)) {
          return word.match("http")
            ? `<a target="blank" href="${word}">${word}</a>`
            : `<a target="blank" href="http://${word}">${word}</a>`;
        }
  
        return word;
      })
      .join(" ");
  
    return parsedText;

    // return value.replace(/(\r\n|\n|\r)/gm, "<br>");
  }
}