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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { InputFormatDirective } from './input-format.directive';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

// Routes
const routes: Routes = [
  { path: '', component: UsersComponent }, // Default route
  { path: 'users', component: UsersComponent }, // Home route
  { path: 'about', component: AboutComponent }, // About route
  { path: 'contact', component: ContactComponent }, // Contact route
  { path: '**', redirectTo: '' }, // Wildcard route for handling 404
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AgePipe,
    BindingComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    UsersComponent,
    AddressComponent,
    CompanyComponent,
    SummaryPipe,
    InputFormatDirective,
    NewCourseFormComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes), // Import the routes
    FormsModule,
    ReactiveFormsModule,

  ],
  //All service in angular must be import here in provider
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
