import { Component } from '@angular/core';
import { UsersService } from '../emergency.service';
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
                private _route: ActivatedRoute,) { };

    ngOnInit() {
        this.user = this._authenticationService.user
        this.paramsObserver = this._route.params.subscribe(params => {
            let studentId = params['studentId'];
            this._articlesService
                .records(studentId)
                .subscribe( articles => {
                    this.articles = articles;
                    this.allowEdit = true;
                });
        });
    }

    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
}

