import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {}

  // title = 'Mentor On Demand';
  // currentUser: User;

  // constructor(private userService: UserService, private router: Router) {
  //   //Cal it observable because it can be changed from other page like login.
  //   this.userService.currentUser.subscribe(data => {
  //     this.currentUser = data;
  //   });
  // }

  // logOut() {
  //   this.userService.logOut().subscribe(data => {
  //     this.router.navigate(['/login']);
  //   })
  // }

  // ngOnInit(): void {
  // }

}
