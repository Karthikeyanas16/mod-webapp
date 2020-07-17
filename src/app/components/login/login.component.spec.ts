import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


import { LoginComponent } from './login.component';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExpectedConditions } from 'protractor';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { of } from 'rxjs';
import { throwError } from 'rxjs'; // import throwError

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let mockUserService = jasmine.createSpyObj('userService', ['login']);
  mockUserService.currentUserValue = "testuser1";/* mock currentUserValue to what it should be */
  let router: Router;


  beforeEach(async(() => {
    // I don't think you need HttpClientTestingModule or maybe FormsModule
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule, RouterTestingModule.withRoutes([
            { path: 'profile', component: ProfileComponent }
        ])],
      declarations: [LoginComponent, ProfileComponent],
      providers: [{ provide: UserService, useValue: mockUserService }]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    router = TestBed.get(Router);
    spyOn(router, 'navigate'); // spy on router navigate
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
});

it('should go profile ', async(() => {
  fixture.detectChanges();
  mockUserService.login.and.returnValue(of({'user':'testuser1'})); // mock login method on userService when it is called
  component.login();
  expect(router.navigate).toHaveBeenCalledWith(['/profile']);   
}));


it('should set error message on error ', async(() => {
  fixture.detectChanges();
  mockUserService.login.and.returnValue(throwError('Error')); // mock login method on userService when it is called
  component.login();
  expect(component.errorMessage).toBe('Username or password is incorrect.');
}));



});


