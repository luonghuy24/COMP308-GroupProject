﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersRoutes } from './users.routes';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { CheckComponent } from './check/check.component';
import { ListCoursesComponent } from './listcourses/listcourses.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(UsersRoutes),
    ],
    declarations: [
        UsersComponent,
        ListComponent,
        ViewComponent,
        ListCoursesComponent,
        CheckComponent
    ]
})
export class UsersModule { }
