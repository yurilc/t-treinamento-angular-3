import {
  Component, OnInit, Output,
  EventEmitter
} from '@angular/core';

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
  addReceita = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onAddReceita() {
    console.log("titulo", this.titulo);
    console.log("descricao", this.descricao);
    this.addReceita.emit({
      titulo: this.titulo,
      descricao: this.descricao
    });
  }
}









