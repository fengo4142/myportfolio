import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BasicInfoComponent } from './basic-info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: BasicInfoComponent }]),
  ],
  declarations: [BasicInfoComponent],
  exports: [],
})
export class BasicInfoModule {}
