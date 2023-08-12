import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basic-info',
    loadChildren: () =>
      import('./basic-info/basic-info.module').then((m) => m.BasicInfoModule),
  },
  {
    path: 'portfolios',
    loadChildren: () =>
      import('./portfolios/portfolios.module').then((m) => m.PortfoliosModule),
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
