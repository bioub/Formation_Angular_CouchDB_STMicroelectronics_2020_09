import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonLinkComponent } from './button-link/button-link.component';
import { CheckmarkPipe } from './checkmark.pipe';



@NgModule({
  declarations: [ButtonLinkComponent, CheckmarkPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, // module (exporte les exports (component, pipe, directive))
    ButtonLinkComponent, // component
    CheckmarkPipe, // pipe
    // directive
  ]
})
export class SharedModule { }
