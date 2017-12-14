import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit, OnDestroy {

  receitas: Receita[];
  receitasSubscription: Subscription;

  selectedIndex = -1;
  
  constructor(private receitaService: ReceitaService) { }

  ngOnInit() {
    this.receitas =
      this.receitaService.getReceitas();
    this.receitasSubscription = 
      this.receitaService.receitasSubject.subscribe(
      (receitas: Receita[]) => {
        this.receitas = receitas;
        this.selectedIndex = -1;
      }
    );
  }

  ngOnDestroy() {
    this.receitasSubscription.unsubscribe();
  }

  onEditReceita(index: number) {
    this.selectedIndex = index;
  }

  onRemoveReceita(index: number) {
    //this.receitas.splice(index, 1);
    this.receitaService.remove(index);
  }

  onNew() {

  }

}