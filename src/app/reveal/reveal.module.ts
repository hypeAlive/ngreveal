import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from "./container/container.component";
import {SlideComponent} from "./slide/slide.component";
import {RemoveWrapperDirective} from "./remove-wrapper.directive";
import {CodeComponent} from "./code/code.component";



@NgModule({
  declarations: [
    ContainerComponent,
    SlideComponent,
    CodeComponent
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
