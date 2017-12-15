import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { IngredienteService } from '../../core/ingrediente.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-ingrediente-detail',
  templateUrl: './ingrediente-detail.component.html',
  styleUrls: ['./ingrediente-detail.component.css']
})
export class IngredienteDetailComponent implements OnInit {
  ingrediente: Ingrediente;

  constructor(private ingredienteService: IngredienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.ingrediente = this.ingredienteService.getIngrediente(params['id']);
      if(!this.ingrediente.nome) {
        this.router.navigate([ '../' ], { relativeTo: this.route });
      }
    });
  }

}
