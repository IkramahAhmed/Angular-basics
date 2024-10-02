import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http'; //api
import { BindingComponent } from './binding/binding.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes
const routes: Routes = [
  { path: '', component: UsersComponent }, // Default route
  { path: 'users', component: UsersComponent }, // Home route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'contact', component: ContactComponent }, // Contact route
  { path: '**', redirectTo: '' }, // Wildcard route for handling 404
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
     // Import the routes
  ],
  //All service in angular must be import here in provider
})
export class AppModule {}
