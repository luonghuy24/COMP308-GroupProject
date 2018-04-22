import { Component } from '@angular/core';
import { TipsService } from '../tips.service';
@Component({
    selector: 'tips',
    templateUrl: 'app/tips/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: TipsService) { }
    ngOnInit() {
        // this._articlesService.list().subscribe(articles => this.articles
        //     = articles);
        console.log('AAAAAA');
    }
}

