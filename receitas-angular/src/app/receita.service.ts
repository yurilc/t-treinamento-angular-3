import { Receita } from "./receita";

import { Subject } from 'rxjs/Subject';

export class ReceitaService {
    private receitas: Receita[] = [];
    receitasSubject = new Subject<Receita[]>(); 

    getReceitas() {
        //return this.receitas.slice();
        return [ ...this.receitas ];
    }

    getReceita(index: number) {
        return { ...this.receitas[index] };
    }

    updateReceita(index: number, receita: Receita) {
        this.receitas[index] = receita;
        this.receitasSubject.next(
            this.getReceitas()
        );
    }

    addReceita(receita: Receita) {
        this.receitas.push(receita);
        this.receitasSubject.next(
            this.getReceitas()
        );
    }

    remove(index: number) {
        this.receitas.splice(index, 1);
        this.receitasSubject.next(
            this.getReceitas()
        );
    }
}