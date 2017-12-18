import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
    { path: '', component: ReceitaListComponent },
    { path: 'new', component: ReceitaFormComponent, canActivate: [AuthGuard] },
    { path: ':id/edit', component: ReceitaFormComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ReceitaDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReceitaRoutingModule {}