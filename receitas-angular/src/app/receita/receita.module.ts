import { NgModule } from '@angular/core';

import { ReceitaResumoComponent } from './receita-resumo/receita-resumo.component';
import { ReceitaListComponent } from './receita-list/receita-list.component';
import { ReceitaFormComponent } from './receita-form/receita-form.component';
import { ReceitaDetailComponent } from './receita-detail/receita-detail.component';
import { ReceitaRoutingModule } from './receita-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ReceitaResumoComponent,
        ReceitaListComponent,
        ReceitaFormComponent,
        ReceitaDetailComponent
    ],
    imports: [
        SharedModule,
        ReceitaRoutingModule
    ]
})
export class ReceitaModule {}