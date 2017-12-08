import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit {

  receitas = [
    { titulo: 'Titulo 1', descricao: 'Descrição 1' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição da receita' },
    { titulo: 'Novo titulo', descricao: 'Descrição Nova' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição ADS123' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição da receita' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição da receita' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição da receita' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição da receita' },
    { titulo: 'Titulo da Receita', descricao: 'Descrição da receita' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
