import { Component } from '@angular/core';
import { TipsService } from './tips.service';
@Component({
    selector: 'tips',
    template: '<router-outlet></router-outlet>',
    providers: [TipsService]
})
export class TipsComponent { }
