import { Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
// import { ListCoursesComponent } from './listcourses/listcourses.component';

export const StudentsRoutes: Routes = [{
    path: 'students',
    component: StudentsComponent,
    children: [
        { path: '', component: ListComponent },
        { path: ':articleId', component: ViewComponent },
        // { path: 'courses', component: ListCoursesComponent}
    ],
}];