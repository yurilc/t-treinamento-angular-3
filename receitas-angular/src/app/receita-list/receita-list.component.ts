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

  selectedIndex = -1;
  receita: Receita;
  modo = 'list';

  constructor() { }

  ngOnInit() {
  }
  
  onAddReceita(receita: Receita) {
    console.log(receita);
      this.receitas.push(receita);
  }
    
  onConfirmEditReceita(receita: Receita) {
    this.receitas[this.selectedIndex] = receita;
  }

  onEditReceita(index: number) {
    this.selectedIndex = index;
    this.receita = this.receitas[index];
    this.modo = 'edit';
  }

  onCancel() {
    this.selectedIndex = -1;
    this.receita = undefined;
    this.modo = 'list';
  }

  onRemoveReceita(index: number) {
    this.receitas.splice(index, 1);
    this.onCancel();
  }

  onNew() {
    this.modo = 'new';
  }

}









