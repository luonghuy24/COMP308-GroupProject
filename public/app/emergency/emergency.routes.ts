import { Routes } from '@angular/router';
import { EmergencyComponent } from './emergency.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

export const EmergencyRoutes: Routes = [{
    path: 'emergency',
    component: EmergencyComponent,
    children: [
        { path: '', component: ListComponent },
        { path: 'create', component: CreateComponent },
        { path: ':articleId', component: ViewComponent }
        
    ],
}];
