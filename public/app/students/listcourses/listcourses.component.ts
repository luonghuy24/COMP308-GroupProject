import { Component } from '@angular/core';
import { StudentsService } from '../students.service';
@Component({
    selector: 'list',
    templateUrl: 'app/students/list/listcourses.template.html'
})
export class ListCoursesComponent {
    articles: any;
    errorMessage: string;
    constructor(private _articlesService: StudentsService) { }
    ngOnInit() {
        this._articlesService.list().subscribe(articles => this.articles
            = articles);
    }
}

