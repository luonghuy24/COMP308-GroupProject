import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthenticationService } from '../../authentication/authentication.service';
@Component({
    selector: 'check',
    templateUrl: 'app/users/check/check.template.html'
})
export class CheckComponent {
    articles: any;
    user: any;
    errorMessage: string;
    info: any = {};
    result: any;
    constructor(private _articlesService: UsersService,
                private _authenticationService: AuthenticationService,) { }
    ngOnInit() {
      // this.user = this._authenticationService.user
       // this._articlesService.list().subscribe(articles => this.articles
       //      = articles);
    }

    check() {
      if (this.info.fever == true){
        this.info.fever = 'yes'
      } else {
        this.info.fever = 'no'
      }
      if (this.info.cough == true){
        this.info.cough = 'yes'
      } else {
        this.info.cough = 'no'
      }
      if (this.info.fatigue == true){
        this.info.fatigue = 'yes'
      } else {
        this.info.fatigue = 'no'
      }

      console.log(this.info)
      this._articlesService
          .check(this.info)
          .subscribe(result => this.result = JSON.stringify(result)),
          error => this.errorMessage = error);
    }
}

