import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HighlightDirective } from './highlight.directive';
import { ClickDirective } from './click.directive';
import { ResumoPipe } from './resumo.pipe';
import { DificuldadePipe } from './dificuldade.pipe';


@NgModule({
    declarations: [
        HighlightDirective,
        ClickDirective,
        ResumoPipe,
        DificuldadePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ], exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HighlightDirective,
        ClickDirective,
        ResumoPipe,
        DificuldadePipe
    ]
})
export class SharedModule {}