import {
  Component, OnInit, Output,
  EventEmitter,
  Input, OnChanges
} from '@angular/core';

import { Receita } from '../receita';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.css']
})
export class ReceitaFormComponent implements OnInit, OnChanges, OnDestroy {
  // nome_da_variavel: tipo = valor;
  // nome_da_variavel = valor;
  titulo: string;
  descricao: string;

  @Input()
  receita: Receita;
  @Input()
  index: number;

  @Output()
  addReceita = new EventEmitter<Receita>();
  @Output()
  editReceita = new EventEmitter<Receita>();
  @Output()
  cancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("ngOnChanges()");
    if(this.receita) {
      this.titulo = this.receita.titulo;
      this.descricao = this.receita.descricao;
    }
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  onAddReceita() {
    console.log("titulo", this.titulo);
    console.log("descricao", this.descricao);
    
    const receita = new Receita(
      this.titulo,
      this.descricao
    );

    if(this.index == -1) {
      this.addReceita.emit(receita);
    } else {
      this.editReceita.emit(receita);
    }

    this.onCancel();
  }

  onCancel() {
    this.titulo = '';
    this.descricao = '';
    this.cancel.emit();
  }
}









