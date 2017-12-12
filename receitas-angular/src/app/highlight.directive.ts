import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

/**
 * selector: 'appHighlight' -> <appHighlight></appHighlight>
 * selector: '[appHighlight]' -> <tag appHighlight></tag>
 */
@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @Input("appHighlight")
    config: any;

    @HostBinding("style.border-color")
    corBorda: string;

    @HostBinding("style.border-width")
    tamanhoBorda: string

    ngOnInit(){
        if(this.config === '') {
            this.config = {
                cor: 'blue',
                tamanho: '5px'
            };
        }
        console.log(this.config);
    }

    @HostListener("mouseenter")
    onMouseEnter(){
        this.corBorda = this.config.cor;
        this.tamanhoBorda = this.config.tamanho;
    }

    @HostListener("mouseleave")
    voltaCorParaOriginal(){
        this.corBorda = '';
        this.tamanhoBorda = '';
    }





}