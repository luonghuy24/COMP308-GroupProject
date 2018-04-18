import { Component } from '@angular/core';
import { UsersService } from './emergency.service';
@Component({
    selector: 'articles',
    template: '<router-outlet></router-outlet>',
    providers: [UsersService]
})
export class UsersComponent { }
