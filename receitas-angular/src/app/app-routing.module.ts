import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaListComponent } from './receita/receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita/receita-form/receita-form.component';
import { ReceitaDetailComponent } from './receita/receita-detail/receita-detail.component';

const routes: Routes = [
    { path: '', component: ReceitaListComponent },
    { path: 'new', component: ReceitaFormComponent },
    { path: ':id/edit', component: ReceitaFormComponent },
    { path: ':id', component: ReceitaDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }