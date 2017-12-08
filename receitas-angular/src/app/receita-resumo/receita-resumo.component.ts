import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-receita-resumo',
    templateUrl: './receita-resumo.component.html',
    styleUrls: [ './receita-resumo.component.css' ]
})
export class ReceitaResumoComponent {
    @Input()
    titulo = "Titulo da receita";
    @Input("desc")
    descricao = "Descrição da receita ABC123";
    @Input("estilo")
    estilo = "default";
}