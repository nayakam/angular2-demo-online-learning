import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer) {

    }

    onFocus() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '500')
    }

    onBlur() {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'width', '100')
    }
}