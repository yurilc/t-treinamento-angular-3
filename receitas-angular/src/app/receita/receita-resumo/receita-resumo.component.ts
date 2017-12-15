import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input()
    dificuldade: string;
    @Input("estilo")
    estilo = "default";
    @Input()
    index: number;

    @Output()
    editReceita = new EventEmitter<number>();
    @Output()
    removeReceita = new EventEmitter<number>();

    onEditReceita() {
        this.editReceita.emit(this.index);
    }

    onRemoveReceita() {
        this.removeReceita.emit(this.index);
    }

}








