import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { MenuComponent } from '../menu/menu.component';

import { ReceitaService } from './receita.service';
import { IngredienteService } from './ingrediente.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations:[
        NotFoundComponent,
        HomeComponent,
        LoginComponent,
        CadastroComponent,
        MenuComponent
    ], imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
    ], exports: [
        NotFoundComponent,
        HomeComponent,
        LoginComponent,
        CadastroComponent,
        MenuComponent
    ],
    providers: [
        ReceitaService,
        IngredienteService,
        AuthService,
        AuthGuard
    ]
})
export class CoreModule {}