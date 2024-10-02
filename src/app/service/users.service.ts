import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // Servies
  //   Angular Services:

  // Purpose: Designed specifically for Angular applications.
  // Functionality: Provide a centralized way to manage data, logic, and functionality that can be shared across different components in your application.
  // Dependency Injection: Services are typically created using dependency injection, making them easily accessible throughout the component hierarchy.
  // Lifecycle Hooks: Services can have lifecycle hooks like ngOnInit and ngOnDestroy to perform specific actions upon initialization or destruction.
  // Context API:

  // Purpose: A more general-purpose API that can be used in any JavaScript application, not just Angular.
  // Functionality: Provides a way to share data across an entire application tree without explicitly passing it down through component props.
  // Provider Component: Requires a provider component to wrap the application tree where the context is available.
  // No Lifecycle Hooks: Context API itself doesn't have lifecycle hooks, but the provider component can have them if needed.
  // Similarities:

  // Both services and the Context API can be used to store and share data across components.
  // They can both help to reduce the amount of code duplication in your application.
  // koi bhe data ,function ek jaga store kar kay mulitipole jaga use krsaktay hen

  //   constructor() { }
  // getAllUsers(){
  //   return
  //   //[
  //   //   {id:101,name:'john',salary:2,dob:new Date("05/10/1989")},
  //   //   {id:102,name:'john',salary:2,dob:new Date("05/10/1990")},
  //   //   {id:103,name:'john',salary:2,dob:new Date("05/10/1984")},
  //   //   {id:104,name:'john',salary:2,dob:new Date("05/10/1985")},
  //   // ]
  // }

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  // Http Services
  constructor(private http: HttpClient) {}

  // Method to fetch users

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  // Method to fetch a single user by ID

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/$id`);
  }
}
