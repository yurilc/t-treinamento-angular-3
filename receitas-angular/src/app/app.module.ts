import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceitaService } from './core/receita.service';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { IngredienteListComponent } from './ingrediente/ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import { IngredienteDetailComponent } from './ingrediente/ingrediente-detail/ingrediente-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';
import { IngredienteService } from './core/ingrediente.service';
import { AuthService } from './core/auth.service';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    IngredienteListComponent,
    IngredienteFormComponent,
    IngredienteDetailComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    ReceitaService,
    IngredienteService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
