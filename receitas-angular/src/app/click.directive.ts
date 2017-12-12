import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appClick]'
})
export class ClickDirective {

    @HostBinding("style.cursor")
    cursor = 'pointer';

    @HostBinding("style.backgroundColor")
    background: string;

    @HostListener("click")
    click() {
        const newBackground = "#000000";
        this.background = 
            this.background == newBackground
                ? '' : newBackground;
    }
}