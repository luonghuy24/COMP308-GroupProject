import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
        private _route: ActivatedRoute,
        private _articlesService: RecordsService,
        private _authenticationService: AuthenticationService) {
        // this.user = _authenticationService.user;
    }

    ngOnInit() {
        this.user = this._authenticationService.user
        this._route.queryParams.subscribe(params => {
            this.article.patientName = params['patientName'];
            this.article.patient   = params['patientId'];
        })

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
