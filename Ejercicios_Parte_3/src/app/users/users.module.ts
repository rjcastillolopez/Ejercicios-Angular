import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContentComponent
  ]
})
export class UsersModule { }
