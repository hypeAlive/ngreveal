import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-markdown',
  standalone: false,
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})
export class MarkdownComponent {

  @Input('file') file: string | null = '';

}
