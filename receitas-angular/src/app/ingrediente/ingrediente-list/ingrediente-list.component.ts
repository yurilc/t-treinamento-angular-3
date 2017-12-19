import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IngredienteService } from '../../core/ingrediente.service';
import { Ingrediente } from '../ingrediente';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.css']
})
export class IngredienteListComponent implements OnInit, OnDestroy {
  ingredientes: Ingrediente[];
  subscription: Subscription;
  constructor(private ingredienteService: IngredienteService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.list();
    this.subscription = 
      this.ingredienteService
        .subject
        .subscribe(
      () => {
        this.list();
        console.log("ReceitaListComponente escutando subject de ingredientes");
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private list() {
    this.ingredienteService
    .getIngredientes()
    .subscribe(
      (data: Ingrediente[]) => {
        console.log('consulta com sucesso');
        this.ingredientes = data;
      },
      (erro) => {
        console.log('consulta com erro', erro);
      },
      () => {
        console.log('consulta concluída');
      }
    );
  }

  onDelete(index: string) {
    this.ingredienteService
      .removeIngrediente(index)
      .subscribe(()=>{
        this.router.navigate([ "./" ], { relativeTo: this.route });
      });
  }

}
