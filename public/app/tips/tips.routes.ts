import { Routes } from '@angular/router';
import { TipsComponent } from './tips.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export const TipsRoutes: Routes = [{
    path: 'tips',
    component: TipsComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':articleId', component: ViewComponent },
        { path: ':articleId/edit', component: EditComponent }
    ],
}];