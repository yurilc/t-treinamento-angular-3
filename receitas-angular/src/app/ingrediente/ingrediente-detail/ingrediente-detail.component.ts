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
  ingrediente = new Ingrediente(null, null);

  constructor(private ingredienteService: IngredienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("ReceitaDetailComponente ngOnInt");
    this.route.params.subscribe((params: Params) => {
      this.ingredienteService
        .getIngrediente(params['id'])
        .subscribe((ingrediente: Ingrediente) => {
          this.ingrediente = ingrediente;
          if(!this.ingrediente.nome) {
            this.router.navigate([ '../' ], { relativeTo: this.route });
          }
        });
      console.log("ReceitaDetailComponente escutando observable de parametros");
    });
  }

}
