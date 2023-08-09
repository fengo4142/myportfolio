import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MpNavbarComponent } from './mp-navbar/mp-navbar.component';
import { MpLinkComponent } from './mp-link/mp-link.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MpNavbarComponent, MpLinkComponent],
  exports: [MpNavbarComponent],
})
export class MpComponentsModule {}
