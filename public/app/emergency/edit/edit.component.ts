import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmergencyService } from '../emergency.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'edit',
    templateUrl: 'app/emergency/edit/edit.template.html'
})
export class EditComponent {
    article: any = {};
    errorMessage: string;
    paramsObserver: any;
    user: any;
    constructor(private _router: Router,
        private _route: ActivatedRoute,
        private _articlesService: EmergencyService,
        private _authenticationService: AuthenticationService) { }
    ngOnInit() {
        this.user = this._authenticationService.user;
        this.paramsObserver = this._route.params.subscribe(params => {
            let articleId = params['articleId'];
            this._articlesService.read(articleId).subscribe(article => {
                this.article = article;
            },
                error => this._router.navigate(['/emergency']));
});
    }
    ngOnDestroy() {
        this.paramsObserver.unsubscribe();
    }
    update() {
        this._articlesService.update(this.article).subscribe(savedArticle => this._router.navigate(['/emergency', savedArticle._id]),
            error => this.errorMessage =
                error);
    }
}