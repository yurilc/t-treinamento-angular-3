import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaListComponent } from './receita/receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita/receita-form/receita-form.component';
import { ReceitaDetailComponent } from './receita/receita-detail/receita-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/receitas', pathMatch: "full" },
    { path: 'receitas', component: ReceitaListComponent },
    { path: 'receitas/new', component: ReceitaFormComponent },
    { path: 'receitas/:id/edit', component: ReceitaFormComponent },
    { path: 'receitas/:id', component: ReceitaDetailComponent },
    { path: '**', component: NotFoundComponent }
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