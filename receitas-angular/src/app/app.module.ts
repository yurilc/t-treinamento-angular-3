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
    NotFoundComponent
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
