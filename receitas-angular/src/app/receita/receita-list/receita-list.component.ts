import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Receita } from '../receita';
import { ReceitaService } from '../../core/receita.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receita-list',
  templateUrl: './receita-list.component.html',
  styleUrls: ['./receita-list.component.css']
})
export class ReceitaListComponent implements OnInit, OnDestroy {

  receitas: Receita[];

  selectedIndex = -1;
  
  constructor(private receitaService: ReceitaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.receitas =
      this.receitaService.getReceitas();
  }

  ngOnDestroy() {
    
  }

  onDetailReceita(index: number){
    this.router.navigate([ index ], {
      relativeTo: this.route
    });
  }

  onEditReceita(index: number) {
    this.router.navigate([ index, 'edit' ], {
      relativeTo: this.route
    });
    // 123/edit
  }

  onRemoveReceita(index: number) {
    //this.receitas.splice(index, 1);
    this.receitaService.remove(index);
  }

  onNew() {

  }

}