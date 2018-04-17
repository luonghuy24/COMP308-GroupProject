import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'list',
    templateUrl: 'app/users/listcourses/listcourses.template.html'
})
export class ListCoursesComponent {

    user: any;
    article: any;
    paramsObserver: any;
    allowEdit: any;
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: UsersService,
                private _authenticationService: AuthenticationService,
                private _router: Router,
                private _route: ActivatedRoute,) { }

    // ngOnInit() {
    //     this._articlesService.courses().subscribe(articles => this.articles
    //         = articles);
    // }

    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            this._articlesService
                .records(studentId)
                .subscribe(
                articles => {
                    this.articles = articles;
                    this.allowEdit = (this.user._id === studentId)
                    // this.allowEdit = (this.user && this.user._id === this.
                    //     article.creator._id);
                }
        });
    }

    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}

