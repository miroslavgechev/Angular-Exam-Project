import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOnMouseHover]',
})
export class OnMouseHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    const activeElement: HTMLElement =
      this.el.nativeElement.querySelector('.active');
    const inactiveElement: HTMLElement =
      this.el.nativeElement.querySelector('.inactive');
    const aTags: HTMLElement[] = this.el.nativeElement.querySelectorAll('a');

    this.changeBackgroundOnMouseEnter(activeElement, inactiveElement, aTags);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
    const activeElement = this.el.nativeElement.querySelector('.active');
    const inactiveElement = this.el.nativeElement.querySelector('.inactive');
    const aTags: HTMLElement[] = this.el.nativeElement.querySelectorAll('a');

    this.changeBackgroundOnMouseLeave(activeElement, inactiveElement, aTags);
  }

  private changeBackgroundOnMouseEnter(
    activeElement: HTMLElement,
    inactiveElement: HTMLElement,
    aTags: HTMLElement[]
  ) {
    activeElement.classList.remove('active');
    activeElement.classList.add('inactive');

    inactiveElement.classList.remove('inactive');
    inactiveElement.classList.add('active');

    aTags.forEach((el: HTMLElement) => {
      this.renderer.setStyle(el, 'color', 'rgb(255,255,255)');
    });
  }

  private changeBackgroundOnMouseLeave(
    activeElement: HTMLElement,
    inactiveElement: HTMLElement,
    aTags: HTMLElement[]
  ) {
    activeElement.classList.remove('active');
    activeElement.classList.add('inactive');

    inactiveElement.classList.remove('inactive');
    inactiveElement.classList.add('active');

    aTags.forEach((el: HTMLElement) => {
      this.renderer.setStyle(el, 'color', 'rgb(0,0,0)');
    });
  }
}
