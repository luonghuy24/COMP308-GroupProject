import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecordsService } from '../records.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'create',
    templateUrl: 'app/records/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    errorMessage: string;
    user: any;
    constructor(private _router: Router,
        private _articlesService: RecordsService,
        private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }
    create() {
        console.log(this.article)
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate(['/records',
                createdArticle._id]),
            error => this.errorMessage = error);
    }
}
