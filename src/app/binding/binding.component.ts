import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent implements OnInit {
  pageTitle: string = 'Event binding in angular';

  btnStatus: boolean = false;
  constructor() {}

  ngOnInit() {}

  // Event Binding just like whenn user clciking action
  changeTitle() {
    this.pageTitle = 'Data Binding first title';
    console.log('helo');
  }
}
