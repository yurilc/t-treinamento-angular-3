import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { IngredienteRoutingModule } from './ingrediente-routing.module';
import { IngredienteDetailComponent } from './ingrediente-detail/ingrediente-detail.component';
import { IngredienteFormComponent } from './ingrediente-form/ingrediente-form.component';
import { IngredienteListComponent } from './ingrediente-list/ingrediente-list.component';

@NgModule({
    declarations: [
        IngredienteListComponent,
        IngredienteFormComponent,
        IngredienteDetailComponent
    ], imports: [
        SharedModule,
        IngredienteRoutingModule
    ]
})
export class IngredienteModule {

}