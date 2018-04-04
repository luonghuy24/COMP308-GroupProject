import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
@Component({
    selector: 'list',
    templateUrl: 'app/students/list/list.template.html'
})
export class ListComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: StudentsService) { }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }
}

