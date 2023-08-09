import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BasicInfoComponent } from './views/basic-info/basic-info.component';
import { PortfoliosComponent } from './views/portfolios/portfolios.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basic-info',
    component: BasicInfoComponent,
  },
  {
    path: 'portfolios',
    component: PortfoliosComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
