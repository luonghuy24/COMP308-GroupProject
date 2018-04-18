import { Routes } from '@angular/router';
import { UsersComponent } from './emergency.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ListCoursesComponent } from './listemergency/listcourses.component';

export const UsersRoutes: Routes = [{
    path: 'emergency',
    component: UsersComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':articleId', component: ViewComponent },
        { path: ':studentId/records', component: ListCoursesComponent}
    ],
}];