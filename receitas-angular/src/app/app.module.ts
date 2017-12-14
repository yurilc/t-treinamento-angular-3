import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceitaResumoComponent } from './receita-resumo/receita-resumo.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { HighlightDirective } from './highlight.directive';
import { ClickDirective } from './click.directive';
import { ReceitaService } from './receita.service';
import { ResumoPipe } from './resumo.pipe';
import { DificuldadePipe } from './dificuldade.pipe';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaResumoComponent,
    ReceitaListComponent,
    ReceitaFormComponent,
    HighlightDirective,
    ClickDirective,
    ResumoPipe,
    DificuldadePipe
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
