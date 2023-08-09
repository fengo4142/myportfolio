import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpComponentsModule } from './mp-components/mp-component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MpComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
