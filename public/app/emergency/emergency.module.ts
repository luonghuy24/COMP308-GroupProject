import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmergencyRoutes } from './emergency.routes';
import { EmergencyComponent } from './emergency.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(EmergencyRoutes),
    ],
    declarations: [
        EmergencyComponent,
        ListComponent,
        ViewComponent,
        CreateComponent,
        EditComponent
    ]
})
export class EmergencyModule { }
