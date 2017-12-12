import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReceitaResumoComponent } from './receita-resumo/receita-resumo.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaResumoComponent,
    ReceitaListComponent,
    ReceitaFormComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
