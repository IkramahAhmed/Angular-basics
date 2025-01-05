import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubFollowerComponent } from './github-follower.component';

describe('GithubFollowerComponent', () => {
  let component: GithubFollowerComponent;
  let fixture: ComponentFixture<GithubFollowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubFollowerComponent]
    });
    fixture = TestBed.createComponent(GithubFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
