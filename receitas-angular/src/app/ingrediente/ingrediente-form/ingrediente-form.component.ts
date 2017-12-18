import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import { Ingrediente } from '../ingrediente';
import { IngredienteService } from '../../core/ingrediente.service';

@Component({
  selector: 'app-ingrediente-form',
  templateUrl: './ingrediente-form.component.html',
  styleUrls: ['./ingrediente-form.component.css']
})
export class IngredienteFormComponent implements OnInit {
  index = -1;
  ingrediente: Ingrediente;


  constructor(private ingredienteService: IngredienteService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    console.log("ReceitaFormComponente ngOnInt");
    this.ingrediente = new Ingrediente(null);
    if(this.route.snapshot.params['id']) {
      this.index = this.route.snapshot.params['id'];
      this.ingrediente = this.ingredienteService.getIngrediente(this.index);
    }
  }

  onSubmit(form: NgForm) {
    const ingrediente = form.value;
    if(this.index == -1) {
      this.ingredienteService.addIngrediente(ingrediente);
      const i = this.ingredienteService.getIngredientes().length -1;
      this.router.navigate(['../', i], { relativeTo: this.route });
    } else {
      this.ingredienteService.updateIngrediente(this.index, ingrediente);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    form.reset();
  }

  onCancel() {
    this.location.back();
  }
}
