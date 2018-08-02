import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPageComponent } from './view-page/view-page.component';


const appRoutes: Routes = [
  {path: '', component:LoginPageComponent},
  {path:'view', component:ViewPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ViewPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
