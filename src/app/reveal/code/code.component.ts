import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-code',
  standalone: false,
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {

  @Input('id') id: string | null = null;
  @Input('lines') lines: string | boolean = false;
  @Input('noescape') noescape: boolean = false;

}
