/// <reference path="../emergency.service.ts" />
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmergencyService } from '../emergency.service';
@Component({
    selector: 'create',
    templateUrl: 'app/emergency/create/create.template.html'
})
export class CreateComponent {
    article: any = {};
    errorMessage: string;
    constructor(private _router: Router,
        private _articlesService: EmergencyService) { }
    create() {
        this._articlesService
            .create(this.article)
            .subscribe(createdArticle => this._router.navigate(['/emergency',
                createdArticle._id]),
            error => this.errorMessage = error);
    }
}
