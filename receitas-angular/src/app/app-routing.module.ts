import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';

const routes: Routes = [
    { path: '', component: ReceitaListComponent },
    { path: 'new', component: ReceitaFormComponent },
    { path: ':id/edit', component: ReceitaFormComponent }
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