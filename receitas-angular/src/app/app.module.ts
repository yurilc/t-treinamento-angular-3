import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceitaResumoComponent } from './receita/receita-resumo/receita-resumo.component';
import { ReceitaListComponent } from './receita/receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita/receita-form/receita-form.component';
import { ReceitaService } from './core/receita.service';
import { HighlightDirective } from './shared/highlight.directive';
import { ClickDirective } from './shared/click.directive';
import { ResumoPipe } from './shared/resumo.pipe';
import { DificuldadePipe } from './shared/dificuldade.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ReceitaDetailComponent } from './receita/receita-detail/receita-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IngredienteListComponent } from './ingrediente/ingrediente-list/ingrediente-list.component';
import { IngredienteFormComponent } from './ingrediente/ingrediente-form/ingrediente-form.component';
import { IngredienteDetailComponent } from './ingrediente/ingrediente-detail/ingrediente-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaResumoComponent,
    ReceitaListComponent,
    ReceitaFormComponent,
    HighlightDirective,
    ClickDirective,
    ResumoPipe,
    DificuldadePipe,
    ReceitaDetailComponent,
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
    ReceitaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
