import { Component } from '@angular/core';
import { EmergencyService } from '../emergency.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'list',
    templateUrl: 'app/emergency/list/list.template.html'
})
export class ListComponent {
    articles: any;
    user: any;
    errorMessage: string;
    search;
    constructor(private _articlesService: EmergencyService,
                private _authenticationService: AuthenticationService,) { }
    ngOnInit() {
        this.user = this._authenticationService.user
        if (this.user.type != 'Nurse') {
            this._articlesService.list(this.user._id).subscribe(articles => this.articles
                = articles);
        } else {
            this._articlesService.list2().subscribe(articles => this.articles
                = articles);
        }
     
    }

}

