import { Component, OnInit } from '@angular/core';

import { Receita } from '../receita';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {

  receitas: Receita[] = [
    { titulo: 'Titulo 1', descricao: 'Descrição 1' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddReceita(receita: Receita) {
    console.log(receita);
     this.receitas.push(receita);
  }

}









