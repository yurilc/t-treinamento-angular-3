import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IngredienteService } from '../../core/ingrediente.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit {
  ingredientes: Ingrediente[];
  subscription: Subscription;
  constructor(private ingredienteService: IngredienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.ingredientes = this.ingredienteService.getIngredientes();
    this.subscription = this.ingredienteService.subject.subscribe(
      data => {
        this.ingredientes = data;
        console.log("ReceitaListComponente escutando subject de ingredientes");
      }
    );
  }

  onDelete(index: number) {
    this.ingredienteService.removeIngrediente(index);
    this.router.navigate([ "./" ], { relativeTo: this.route });
  }

}
