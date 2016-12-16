import {Component} from 'angular2/core';
import {CoursesComponent} from "./course/courses.component";

@Component({
    selector: 'my-app',
    template: '<h1>Angular2 Demo : Online Learning</h1> <courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent {
}