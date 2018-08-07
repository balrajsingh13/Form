import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ValuesService } from './values.service';

const appRoutes: Routes = [
  {path: '', component:LoginPageComponent},
  {path:'view', component:ViewPageComponent},
  {path :'edit', component:LoginPageComponent}
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
  providers: [ValuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
