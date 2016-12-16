import {Component} from 'angular2/core';
import {CoursesComponent} from "./course/courses.component";
import {AuthorsComponent} from "./author/authors.component";

@Component({
    selector: 'my-app',
    template: `<h1>Angular2 Demo : Online Learning</h1> 
                <courses></courses>
                <authors></authors>`,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
}