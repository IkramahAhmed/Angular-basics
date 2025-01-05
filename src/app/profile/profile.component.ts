import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId:string | any = ''

constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    console.warn("user id is ",this.route.snapshot.paramMap.get('id'));
    this.userId =this.route.snapshot.paramMap.get('id')
  }
}
