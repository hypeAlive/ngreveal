import {Component, Input} from '@angular/core';

@Component({
  selector: 'r-slide',
  standalone: false,
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.scss'
})
export class SlideComponent {

  @Input('id') id: string | null = null;
  @Input('animate') animate: boolean = false;
  @Input('restart') restart: boolean = false;

}
