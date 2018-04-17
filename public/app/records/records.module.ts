import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { ArticlesRoutes } from './articles.routes';
// import { ArticlesComponent } from './articles.component';


import { RecordsRoutes } from './records.routes';
import { RecordsComponent } from './records.component';

import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(RecordsRoutes),
    ],
    declarations: [
        RecordsComponent,
        CreateComponent,
        ListComponent,
        ViewComponent,
        EditComponent,
    ]
})
export class RecordsModule { }
