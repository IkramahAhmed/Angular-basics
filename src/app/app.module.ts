import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AgePipe } from './pipes/age.pipe';
import { UsersService } from './service/users.service';
import { HttpClientModule } from '@angular/common/http'; //api
import { BindingComponent } from './binding/binding.component';

import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { InputFormatDirective } from './input-format.directive';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { GithubProfileComponent } from './github-profile/github-profile.component';

// Routes
const routes: Routes = [

  { path: 'contact', component: ContactComponent }, // Contact route
  { path: '**', redirectTo: '' }, // Wildcard route for handling 404
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AgePipe,
    BindingComponent,
    ServiceComponent,
    ContactComponent,

    SummaryPipe,
    InputFormatDirective,
    NewCourseFormComponent,
    ChangePasswordComponent,
   
    GithubProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'followers/:username',
        component: GithubProfileComponent,
      },
      {
        path: 'followers',
        component: GithubFollowerComponent,
      },
     

      // Dynmaci Routing
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
   
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'register/:id',
        component: RegisterComponent,
      },

     
      
      
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]), // Import the routes
    FormsModule,
    ReactiveFormsModule,
  ],
  //All service in angular must be import here in provider
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
