import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import Reveal from "reveal.js";
import {NGXLogger} from "ngx-logger";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";
import {RevealModule} from "./reveal/reveal.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RevealModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit{


  private deck!: Reveal.Api;

  constructor(private logger: NGXLogger) {
  }


  ngAfterViewInit(): void {

  }

}
