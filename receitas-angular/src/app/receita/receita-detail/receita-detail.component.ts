import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Receita } from '../receita';
import { ReceitaService } from '../../core/receita.service';

@Component({
  selector: 'app-receita-detail',
  templateUrl: './receita-detail.component.html',
  styleUrls: ['./receita-detail.component.css']
})
export class ReceitaDetailComponent implements OnInit {
  receita: Receita;

  constructor(private route: ActivatedRoute,
              private receitaService: ReceitaService) { }

  ngOnInit() {
    const index = this.route.snapshot.params['id'];
    this.receita = this.receitaService.getReceita(index);
  }

}
