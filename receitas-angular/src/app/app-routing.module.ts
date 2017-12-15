import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaListComponent } from './receita/receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita/receita-form/receita-form.component';
import { ReceitaDetailComponent } from './receita/receita-detail/receita-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { IngredienteListComponent } from './ingrediente/ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import { IngredienteDetailComponent } from './ingrediente/ingrediente-detail/ingrediente-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'ingredientes', component: IngredienteListComponent, children: [
        { path: 'new', component: IngredienteFormComponent},
        { path: ':id/edit', component: IngredienteFormComponent},
        { path: ':id', component: IngredienteDetailComponent}
    ]},
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