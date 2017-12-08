import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReceitaResumoComponent } from './receita-resumo/receita-resumo.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaResumoComponent,
    ReceitaListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
