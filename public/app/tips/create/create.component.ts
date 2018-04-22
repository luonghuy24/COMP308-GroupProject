import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipsService } from '../tips.service';
@Component({
    selector: 'create',
    templateUrl: 'app/tips/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: TipsService) { }
    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate(['/tips',
                createdArticle._id]),
            error => this.errorMessage = error);
    }
}
