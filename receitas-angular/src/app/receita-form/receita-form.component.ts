import {
  Component, OnInit, Output,
  EventEmitter,
  Input, OnDestroy
} from '@angular/core';

import { NgForm } from '@angular/forms';

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receita-form',
  templateUrl: './receita-form.component.html',
  styleUrls: ['./receita-form.component.css']
})
export class ReceitaFormComponent implements OnInit, OnDestroy {
  // nome_da_variavel: tipo = valor;
  // nome_da_variavel = valor;
  titulo: string;
  descricao: string;

  @Input()
  index: number;

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    if(this.index > -1) {
      const receita =
        this.receitaService.getReceita(this.index);
        this.titulo = receita.titulo;
        this.descricao = receita.descricao;
    }
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  onAddReceita(form: NgForm) {
    console.log(form);
    const receita = form.value;
    console.log(receita);
    /*
    const receita = new Receita(
      this.titulo,
      this.descricao
    );

    if(this.index == -1) {
      //this.addReceita.emit(receita);
      this.receitaService.addReceita(receita);
    } else {
      //this.editReceita.emit(receita);
      this.receitaService.updateReceita(
        this.index, receita
      );
    }
    */
  }
}