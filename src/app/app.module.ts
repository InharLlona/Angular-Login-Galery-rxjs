import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHeaderComponent } from './Layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './Layout/private-header/private-header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { PublicMenuComponent } from './Layout/public-menu/public-menu.component';
import { PrivateMenuComponent } from './Layout/private-menu/private-menu.component';
import { HomePageComponent } from './routedComponents/home-page/home-page.component';
import { LoginPageComponent } from './routedComponents/login-page/login-page.component';
import { AboutPageComponent } from './routedComponents/about-page/about-page.component';
import { GaleryPageComponent } from './routedComponents/galery-page/galery-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CRUDComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    FooterComponent,
    PublicMenuComponent,
    PrivateMenuComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutPageComponent,
    GaleryPageComponent,
    DashboardComponent,
    CRUDComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
