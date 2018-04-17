import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentsRoutes } from './students.routes';
import { StudentsComponent } from './students.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { ListCoursesComponent } from './listcourses/listcourses.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(StudentsRoutes),
    ],
    declarations: [
        StudentsComponent,
        ListComponent,
        ViewComponent,
        ListCoursesComponent
    ]
})
export class StudentsModule { }
