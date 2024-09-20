import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";
import {NGXLogger} from "ngx-logger";

@Component({
  selector: 'r-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements AfterViewInit {

  private deck!: Reveal.Api;

  constructor(private logger: NGXLogger) {
  }

  ngAfterViewInit(): void {
    this.deck = new Reveal({
      autoAnimateEasing: 'ease',
      autoAnimateDuration: 1,
      controls: true,
      progress: true,
      hash: true,
    });

    this.deck.initialize({
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
    }).then(() => {this.logger.info("Reveal.js initialized")});
  }

  public getDeck(): Reveal.Api {
    return this.deck;
  }

}
