import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecordsService } from '../records.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'edit',
    templateUrl: 'app/records/edit/edit.template.html'
})
export class EditComponent {
    article: any = {};
    errorMessage: string;
    paramsObserver: any;
    user: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: RecordsService,
        private _authenticationService: AuthenticationService) {
        this.user = _authenticationService.user;
    }
    ngOnInit() {
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articlesService.read(articleId).subscribe(article => {
                this.article = article;
            },
                error => this._router.navigate(['/courses']));
});
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._articlesService.update(this.article).subscribe(savedArticle => this._router.navigate(['/courses', savedArticle._id]),
            error => this.errorMessage =
                error);
    }
}