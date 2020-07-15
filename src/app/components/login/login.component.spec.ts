import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const routerSpy = jasmine.createSpyObj('Router', ['/home']);
  const userServiceSpy = jasmine.createSpyObj('UserService', ['login']);


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
      { provide: UserService, useValue: userServiceSpy },
      { provide: Router,      useValue: routerSpy }
      ],
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
