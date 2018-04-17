import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'list',
    templateUrl: 'app/users/list/list.template.html'
})
export class ListComponent {
    articles: any;
    user: any;
    errorMessage: string;
    search;
    constructor(private _articlesService: UsersService,
                private _authenticationService: AuthenticationService,) { }
    ngOnInit() {
      this.user = this._authenticationService.user
       this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }

    searchStudents() {
      this._articlesService.search(this.search).subscribe(articles => this.articles = articles);
    }
}

