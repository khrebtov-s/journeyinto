import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MinuteSecondsPipe } from "./minutes-seconds.pipe";
import { SafeVideoPipe } from "./safe-video.pipe";
import { SafeHTMLPipe } from "./safe-html.pipe";
import { ExcerptPipe } from "./excerpt.pipe";
import { ReplaceLineBreaks } from "./replaceLineBreaks.pipe";
import { GetParsedTextWithHref } from "./getParsedTextWithHref.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [
    MinuteSecondsPipe,
    SafeVideoPipe,
    SafeHTMLPipe,
    ExcerptPipe,
    ReplaceLineBreaks,
    GetParsedTextWithHref,
  ],
  exports: [
    MinuteSecondsPipe,
    SafeVideoPipe,
    SafeHTMLPipe,
    ExcerptPipe,
    ReplaceLineBreaks,
    GetParsedTextWithHref
  ],
})
export class PipesModule {}
