import { Routes } from '@angular/router';
import { UsersComponent } from './emergency.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ListCoursesComponent } from './listcourses/listcourses.component';

export const UsersRoutes: Routes = [{
    path: 'users',
    component: UsersComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':articleId', component: ViewComponent },
        { path: ':studentId/records', component: ListCoursesComponent}
    ],
}];