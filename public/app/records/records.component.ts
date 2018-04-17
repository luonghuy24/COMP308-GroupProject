import { Component } from '@angular/core';
import { RecordsService } from './records.service';
@Component({
    selector: 'records',
    template: '<router-outlet></router-outlet>',
    providers: [RecordsService]
})
export class RecordsComponent { }
