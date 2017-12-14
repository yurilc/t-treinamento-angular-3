import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Receita } from '../receita';
import { ReceitaService } from '../receita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit, OnDestroy {

  receitas: Receita[];

  selectedIndex = -1;
  
  constructor(private receitaService: ReceitaService,
              private router: Router) { }

  ngOnInit() {
    this.receitas =
      this.receitaService.getReceitas();
  }

  ngOnDestroy() {
    
  }

  onEditReceita(index: number) {
    this.router.navigate([ index, 'edit' ]);
    // 123/edit
  }

  onRemoveReceita(index: number) {
    //this.receitas.splice(index, 1);
    this.receitaService.remove(index);
  }

  onNew() {

  }

}