import {
  Component, OnInit, Output,
  EventEmitter, ViewChild,
  Input, OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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

  index: number = -1;

  constructor(private receitaService: ReceitaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['id']) {
      this.index = this.route.snapshot.params['id'];
    }
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
    console.log(this.form.value);
    const receita = this.form.value;
    console.log(receita);

    if(this.index == -1) {
      //this.addReceita.emit(receita);
      this.receitaService.addReceita(receita);
      this.router.navigate(['']);
    } else {
      //this.editReceita.emit(receita);
      this.receitaService.updateReceita(
        this.index, receita
      );
      this.router.navigate(['']);
    }
  }

  private initializeForm(receita?: Receita){
    let titulo = null;
    let descricao = null;
    let dificuldade = '';
    let ingredientes = [];

    if(receita) {
      titulo = receita.titulo;
      descricao = receita.descricao;
      dificuldade = receita.dificuldade;
      if(receita.ingredientes.length > 0) {
        for(let i = 0; i < receita.ingredientes.length; i++) {
          ingredientes.push(
            new FormControl(
              receita.ingredientes[i],
              [ Validators.required ]
            )
          );
        }
      }
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
      ]),
      'ingredientes': new FormArray(ingredientes)
    });
  }

  addIngrediente() {
    (<FormArray>this.form.get('ingredientes'))
      .push(new FormControl(null, [
        Validators.required
      ]));
  }

  removeIngrediente(index: number) {
    (<FormArray>this.form.get('ingredientes'))
      .removeAt(index);
  }
}


