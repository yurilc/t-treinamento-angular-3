import { Receita } from "./receita";

export class ReceitaService {
    private receitas: Receita[] = [];

    getReceitas() {
        //return this.receitas.slice();
        return [ ...this.receitas ];
    }

    getReceita(index: number) {
        return { ...this.receitas[index] };
    }

    updateReceita(index: number, receita: Receita) {
        this.receitas[index] = receita;
    }

    addReceita(receita: Receita) {
        this.receitas.push(receita);
    }

    remove(index: number) {
        this.receitas.splice(index, 1);
    }
}