import { Component } from '@angular/core';
import { TipsService } from '../tips.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'tips',
    templateUrl: 'app/tips/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    user: any;
    constructor(private _articlesService: TipsService,
                private _authenticationService: AuthenticationService) { }
    ngOnInit() {
        this.user = this._authenticationService.user;
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }
}

