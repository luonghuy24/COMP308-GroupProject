import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CheckComponent } from './check/check.component';
import { ListCoursesComponent } from './listcourses/listcourses.component';

export const UsersRoutes: Routes = [{
    path: 'users',
    component: UsersComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'check', component: CheckComponent},
        { path: ':articleId', component: ViewComponent },
        { path: ':studentId/records', component: ListCoursesComponent}
    ],
}];