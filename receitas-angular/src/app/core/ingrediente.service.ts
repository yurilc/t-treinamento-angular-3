import { Subject } from 'rxjs/Subject';

import { Ingrediente } from "../ingrediente/ingrediente";

export class IngredienteService {
    private ingredientes: Ingrediente[] = [];
    subject = new Subject<Ingrediente[]>();

    getIngredientes() {
        return [ ...this.ingredientes ];
    }

    getIngrediente(index: number) {
        return { ...this.ingredientes[index] };
    }

    addIngrediente(ingrediente: Ingrediente) {
        this.ingredientes.push(ingrediente);
        this.subject.next(this.getIngredientes());
    }

    updateIngrediente(index: number, ingrediente: Ingrediente){
        this.ingredientes[index] = ingrediente;
        this.subject.next(this.getIngredientes());
    }

    removeIngrediente(index: number) {
        this.ingredientes.splice(index, 1);
        this.subject.next(this.getIngredientes());
    }
}