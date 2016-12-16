import {Component} from 'angular2/core';
import {AuthorService} from "./author.service";

@Component({
    selector: 'authors',
    template: `
                <h2>Authors</h2>
                {{title}}
                <ul>
                    <li *ngFor="#authorValue of authors">
                      {{authorValue}}
                    </li>                
                </ul>
                `,
    providers: [AuthorService]
})
export class AuthorsComponent {
    title: string = "Tile for the authors page";
    authors: string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}