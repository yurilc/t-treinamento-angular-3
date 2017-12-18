import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { IngredienteListComponent } from './ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './ingrediente-form/ingrediente-form.component';
import { IngredienteDetailComponent } from './ingrediente-detail/ingrediente-detail.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
    { path: '', component: IngredienteListComponent, children: [
        { path: 'new', component: IngredienteFormComponent},
        { path: ':id/edit', component: IngredienteFormComponent},
        { path: ':id', component: IngredienteDetailComponent}
    ],
        canActivateChild: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class IngredienteRoutingModule{}