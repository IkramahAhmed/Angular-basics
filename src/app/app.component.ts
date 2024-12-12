import { Component, OnInit } from '@angular/core';
import { UsersService } from './service/users.service';
import { first } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog';
  loading: boolean = false;
  form = new FormGroup({
    username:new FormControl(undefined,Validators.required),
    password:new FormControl(undefined,Validators.required)
  });
  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.error('Form is invalid');
    }
  }
  
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
  courses = [
    { name: 'ikramah' },
    { name: 'ali' },
    { name: 'osama' },
    { name: 'nameer' },
    { name: 'ikramah' },
  ];
  userData = {
    name: 'ikramah',
    address: 'b-19',
    phone: '0336662000',
  };
  // onSubmit(data: any) {
  //   console.warn('form Data', data);
  // }
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

  // <!-- Basic Tyscript -->

  //arrays

  //tupple
  //mkaer use only two value if you add more varibasles it will be difficulot to uderstand to you .
  //   let users: [number, string] = [1, 'ikramah'];

  //   function calculate(num1: any, num2: any) {
  //     return num1 + num2;
  //   }

  //   console.log(calculate(4, 6));

  //   const variable = {
  //     firstName: 'ikramah',
  //   };

  //   console.log(variable.firstName);
  // }

  // classBinding
  isActive = false;

  classBinding() {
    this.isActive = true;
  }

  // Style bnding
  isActive2: boolean = false;

  styleBinding() {
    this.isActive2 = !this.isActive2;
  }

  //ng class
  isActive3: boolean = false;

  toggleButtonClass() {
    this.isActive3 = !this.isActive3;
  }

  // envet filter
  onKeyUp() {
    console.log('Enter was pressed');
  }

  // <!-- Templtate Variable -->
  onKeyUp2(email: any) {
    console.log(email);
  }

  // custom pipe
  text = `loremwwwddddddddddjxsnjjnjnd cdjn vd jdnjdnvjnfd dnvunvnvdnnvcd jvdn dbcsbddbcbbbbbbbbbbbbbbbbbjnsjcdbvbhjbdjnds jbdnvcdn jdvnjdnb`;

  // @input
  message = 'hello this data coming from parent component';

  // ngFor chnage detetctive
  onAdd() {
    this.courses.push({ name: 'courses' });
  }
  onRemove(course:any) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
