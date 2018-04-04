import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'create',
    templateUrl: 'app/courses/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    errorMessage: string;
    user: any;
    constructor(private _router: Router,
        private _articlesService: CoursesService,
        private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }
    create() {

        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate(['/courses',
                createdArticle._id]),
            error => this.errorMessage = error);
    }
}
