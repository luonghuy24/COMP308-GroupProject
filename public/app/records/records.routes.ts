import { Routes } from '@angular/router';
import { RecordsComponent } from './records.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const RecordsRoutes: Routes = [{
    path: 'records',
    component: RecordsComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':articleId', component: ViewComponent },
        { path: ':articleId/edit', component: EditComponent }
    ],
}];