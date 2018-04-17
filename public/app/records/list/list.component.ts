import { Component } from '@angular/core';
import { RecordsService } from '../records.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'list',
    templateUrl: 'app/records/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    user: any;
    constructor(private _articlesService: RecordsService,
                private _authenticationService: AuthenticationService) {
      this.user = _authenticationService.user;
    }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }
}

