import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './routedComponents/home-page/home-page.component'
import {LoginPageComponent} from './routedComponents/login-page/login-page.component'
import {AboutPageComponent} from './routedComponents/about-page/about-page.component'
import {GaleryPageComponent} from './routedComponents/galery-page/galery-page.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import { CRUDComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'home',component:HomePageComponent},
{path:'',component:HomePageComponent},
{path:'login',component:LoginPageComponent},
{path:'about',component:AboutPageComponent},
{path:'galery',component:GaleryPageComponent},
{path:'dashboard',component:DashboardComponent},
{path:'crud',component:CRUDComponent},
{path:'profile',component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
