import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReceitaResumoComponent } from './receita-resumo/receita-resumo.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaResumoComponent,
    ReceitaListComponent,
    ReceitaFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
