import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpNavbarComponent } from './mp-navbar/mp-navbar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MpNavbarComponent],
  exports: [MpNavbarComponent],
})
export class MpComponentsModule {}
