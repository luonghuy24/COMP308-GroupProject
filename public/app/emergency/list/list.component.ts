import { Component } from '@angular/core';
import { EmergencyService } from '../emergency.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'list',
    templateUrl: 'app/emergency/list/list.template.html'
})
export class ListComponent {
    articles: any;
    user: any;
    errorMessage: string;
    search;
    constructor(private _articlesService: EmergencyService,
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

