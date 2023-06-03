import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
  ],
  imports: [BrowserModule, NgOptimizedImage, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FooterComponent],
})
export class AppModule {}
