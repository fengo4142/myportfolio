import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PortfoliosComponent } from './portfolios.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: PortfoliosComponent }]),
  ],
  declarations: [PortfoliosComponent],
  exports: [],
})
export class PortfoliosModule {}
