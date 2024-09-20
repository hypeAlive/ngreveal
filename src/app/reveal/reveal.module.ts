import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from "./container/container.component";
import {SlideComponent} from "./slide/slide.component";
import {RemoveWrapperDirective} from "./remove-wrapper.directive";
import {CodeComponent} from "./code/code.component";
import {MarkdownComponent} from "./markdown/markdown.component";



@NgModule({
  declarations: [
    ContainerComponent,
    SlideComponent,
    CodeComponent,
    MarkdownComponent
  ],
  exports: [
    ContainerComponent,
    SlideComponent,
    CodeComponent
  ],
  imports: [
    CommonModule,
    RemoveWrapperDirective
  ]
})
export class RevealModule { }
