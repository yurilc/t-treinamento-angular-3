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
  index: string;
  ingrediente: Ingrediente;


  constructor(private ingredienteService: IngredienteService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    console.log("ReceitaFormComponente ngOnInt");
    this.ingrediente = new Ingrediente(undefined, null);
    if(this.route.snapshot.params['id']) {
      this.index = this.route.snapshot.params['id'];
      this.ingredienteService
        .getIngrediente(this.index)
        .subscribe((ingrediente: Ingrediente)=>{
          this.ingrediente = ingrediente;
        });
    }
  }

  onSubmit(form: NgForm) {
    const ingrediente = form.value;
    if(this.index == undefined) {
      this.ingredienteService
        .addIngrediente(ingrediente)
        .subscribe(data => {
          console.log('retorno firebase', data);
          this.router.navigate(['../', data['name']], { relativeTo: this.route });
        });
    } else {
      //this.ingredienteService.updateIngrediente(this.index, ingrediente);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
    form.reset();
  }

  onCancel() {
    this.location.back();
  }
}
