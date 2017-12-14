import {
  Component, OnInit, Output,
  EventEmitter, ViewChild,
  Input, OnDestroy
} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  //titulo: string;
  //descricao: string;
  dificuldades = [
    { value: '1', label: 'Fácil'},
    { value: '2', label: 'Médio'},
    { value: '3', label: 'Difícil'}
  ];

  form: FormGroup;

  @Input()
  index: number;

  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    if(this.index > -1) {
      const receita =
        this.receitaService.getReceita(this.index);
        this.initializeForm(receita);
    } else {
      this.initializeForm();
    }
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

  onAddReceita() {
    console.log(this.form);
    const receita = this.form.value;
    console.log(receita);

    if(this.index == -1) {
      //this.addReceita.emit(receita);
      this.receitaService.addReceita(receita);
    } else {
      //this.editReceita.emit(receita);
      this.receitaService.updateReceita(
        this.index, receita
      );
    }
  }

  private initializeForm(receita?: Receita){
    let titulo = null;
    let descricao = null;
    let dificuldade = '';

    if(receita) {
      titulo = receita.titulo;
      descricao = receita.descricao;
      dificuldade = receita.dificuldade;
    }

    this.form = new FormGroup({
      'titulo': new FormControl(titulo, [
        Validators.required,
        Validators.maxLength(10)
      ]),
      'descricao': new FormControl(descricao,[
        Validators.required,
        Validators.minLength(3)
      ]),
      'dificuldade': new FormControl(dificuldade,[
        Validators.required
      ])
    });
  }
}