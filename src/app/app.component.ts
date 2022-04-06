import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = COURSES[0].description;
  startDate = new Date(2000, 0, 1);
  price = 9.99;
  rate = .67;

  onCourseSelected(course:Course) {
    console.log(course);
  }

}
