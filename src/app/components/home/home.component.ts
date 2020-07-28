import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Course } from '../../models/course';
import { Transaction } from '../../models/transaction';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import * as data from './course.json';

import { Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import paginate from 'jw-paginate';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

//   //moduleId: module.id,
//   template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
//   <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
//       <a (click)="setPage(1)" class="page-link">First</a>
//   </li>
//   <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
//       <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
//   </li>
//   <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
//       <a (click)="setPage(page)" class="page-link">{{page}}</a>
//   </li>
//   <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
//       <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
//   </li>
//   <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
//       <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
//   </li>
// </ul>`


})
export class HomeComponent implements OnInit  {

  courseList: Array<Course>;
  errorMessage: string;
  infoMessage: string;
  currentUser: User;

  
  items = [];
  pageOfItems: Array<any>;


  // @Input() items: Array<any>;
  // @Output() changePage = new EventEmitter<any>(true);
  // @Input() initialPage = 1;
  // @Input() pageSize = 6;
  // @Input() maxPages = 5;

  // pager: any = {};


  constructor(private userService: UserService, private courseService: CourseService, private router: Router) {
    this.currentUser = this.userService.currentUserValue;
   }

  ngOnInit(): void {
    this.courseList = (data as any).default;
    this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
    // if (this.items && this.items.length) {
    //   this.setPage(this.initialPage);
    // }
  }

  findAllCourses() {
    this.courseService.findAllCourses().subscribe(data => {
      this.courseList = data;
      //this.courseList = [{'category':'Development', 'courseName':'Java', 'id': 100, 'publishDate':'08-07-2020', 'trainer':'James Gosling'}];
    });
  }

  enroll(course: Course) {
    if(!this.currentUser) {
      this.errorMessage = "You should sign in to enroll a course";
      return;
    }
    var transaction = new Transaction();
    transaction.userId = this.currentUser.id;
    transaction.course = course;

    this.courseService.enroll(transaction).subscribe(data => {
      this.infoMessage = "Mission is completed";
    }, err => {
      this.errorMessage = "Unexpected error occured";
    });
  }

  detail(course: Course) {
    localStorage.setItem("currentCourse", JSON.stringify(course));
    this.router.navigate(['/detail', course.id]);
  }

  
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   // reset page if items array has changed
  //   if (changes.items.currentValue !== changes.items.previousValue) {
  //     this.setPage(this.initialPage);
  //   }
  // }

  // private setPage(page: number) {
  //   // get new pager object for specified page
  //   this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

  //   // get new page of items from items array
  //   var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

  //   // call change page function in parent component
  //   this.changePage.emit(pageOfItems);
  // }







}
