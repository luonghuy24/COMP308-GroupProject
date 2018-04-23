import { Component } from '@angular/core';
import { EmergencyService } from './emergency.service';
@Component({
    selector: 'articles',
    template: '<router-outlet></router-outlet>',
    providers: [EmergencyService]
})
export class EmergencyComponent { }
