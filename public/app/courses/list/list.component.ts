import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'list',
    templateUrl: 'app/courses/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    user: any;
    constructor(private _articlesService: CoursesService,
                private _authenticationService: AuthenticationService) {
      this.user = _authenticationService.user;
    }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }
}

