import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from "./container/container.component";
import {SlideComponent} from "./slide/slide.component";
import {RemoveWrapperDirective} from "./remove-wrapper.directive";



@NgModule({
  declarations: [
    ContainerComponent,
    SlideComponent
  ],
  exports: [
    ContainerComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    RemoveWrapperDirective
  ]
})
export class RevealModule { }
