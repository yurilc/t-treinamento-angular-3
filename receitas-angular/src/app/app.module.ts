import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ReceitaResumoComponent } from './receita-resumo/receita-resumo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitaResumoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
