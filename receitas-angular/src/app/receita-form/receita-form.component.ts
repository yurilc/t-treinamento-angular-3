import {
  Component, OnInit, Output,
  EventEmitter
} from '@angular/core';

import { Receita } from '../receita';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.css']
})
export class ReceitaFormComponent implements OnInit {
  // nome_da_variavel: tipo = valor;
  // nome_da_variavel = valor;
  titulo: string;
  descricao: string;

  @Output()
  addReceita = new EventEmitter<Receita>();

  constructor() { }

  ngOnInit() {
  }

  onAddReceita() {
    console.log("titulo", this.titulo);
    console.log("descricao", this.descricao);
    
    const receita = new Receita(
      this.titulo,
      this.descricao
    );

    this.addReceita.emit(receita);
  }
}









