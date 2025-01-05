import { Component } from '@angular/core';

@Component({
  selector: 'app-github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.scss']
})
export class GithubFollowerComponent {

  followers: any[] = [
    {
      login: 'johnDoe',
      avatar_url: 'https://example.com/avatar1.jpg',
      html_url: 'https://github.com/johnDoe'
    },
    {
      login: 'janeSmith',
      avatar_url: 'https://example.com/avatar2.jpg',
      html_url: 'https://github.com/janeSmith'
    },
    {
      login: 'techGuru',
      avatar_url: 'https://example.com/avatar3.jpg',
      html_url: 'https://github.com/techGuru'
    }
  ];
}
