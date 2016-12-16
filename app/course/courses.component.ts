import {Component} from 'angular2/core';
import  {CourseService} from './course.service';
import {AutoGrowDirective} from "./../directive/auto-grow.directive";

@Component({
    selector: 'courses',
    template: `
        <h2> Courses </h2>
        {{title}}
        <input type="text" autoGrow width="50"/>
        
        <ul>
            <li *ngFor="#courseValue of courses" >
            {{courseValue}}
            </li>
        </ul>`,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title: string = "The title of courses page";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}