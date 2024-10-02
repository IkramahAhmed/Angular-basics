import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  loading: boolean = false;
  list: { id: number; name: string }[] = [];
  getData(val: string) {
    console.warn('function called');
  }
  // <!-- custom pipe -->

  //   users:any[]=[
  //     {id:101,name:'john',salary:2,dob:new Date("05/10/1989")},
  //     {id:102,name:'john',salary:2,dob:new Date("05/10/1990")},
  //     {id:103,name:'john',salary:2,dob:new Date("05/10/1984")},
  //     {id:104,name:'john',salary:2,dob:new Date("05/10/1985")},
  //   ]
  userData = {
    name: 'ikramah',
    address: 'b-19',
    phone: '0336662000',
  };
  onSubmit(data: any) {
    console.warn('form Data', data);
  }
  // services
  constructor(private userService: UsersService) {}
  //ngonit is actually hook
  // users:any[]=[];
  // ngOnInit(): void {
  //   this.users =this.userService.getAllUsers();
  // }

  // HTTP Services
  users: any; //save data in users
  ngOnInit() {
    // Fetch users on component initialization
    this.loading = true;
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    );
  }
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
    // item.value = '';  // Clear the input box
  }
  deleteTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}

// <!-- Basic Tyscript -->

//arrays

//tupple
//mkaer use only two value if you add more varibasles it will be difficulot to uderstand to you .
let users: [number, string] = [1, 'ikramah'];

function calculate(num1:any, num2:any) {
  return num1 + num2;
}

console.log(calculate(4, 6));

const variable={
  firstName:'ikramah',
}

console.log(variable.firstName)