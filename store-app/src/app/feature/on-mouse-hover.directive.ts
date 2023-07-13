import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CatalogComponent } from './catalog/catalog.component';

@Directive({
  selector: '[appOnMouseHover]',
})
export class OnMouseHoverDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private catalogComponent: CatalogComponent
  ) {}

  @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
    const imgHoverUrl = this.catalogComponent.cardsList.find(
      (card) => card.id == this.el.nativeElement.id
    )?.imageCatalogHoverUrl;

    if (imgHoverUrl) {
      this.changeBackgroundOnMouseEnter(imgHoverUrl);
    } else {
      return;
    }
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
    const imgUrl = this.catalogComponent.cardsList.find(
      (card) => card.id == this.el.nativeElement.id
    )?.imageCatalogUrl;

    if (imgUrl) {
      this.changeBackgroundOnMouseLeave(imgUrl);
    } else {
      return;
    }
  }

  private changeBackgroundOnMouseEnter(url: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(${url})`
    );
    this.renderer.setStyle(this.el.nativeElement, 'background-size', 'cover');

    const childElements = this.el.nativeElement.querySelectorAll('a');
    childElements.forEach((el: string) => {
      this.renderer.setStyle(el, 'color', 'rgb(255,255,255)');
    });
  }

  private changeBackgroundOnMouseLeave(url: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-image',
      `url(${url})`
    );
    this.renderer.setStyle(this.el.nativeElement, 'background-size', 'contain');

    const childElements = this.el.nativeElement.querySelectorAll('a');
    childElements.forEach((el: string) => {
      this.renderer.setStyle(el, 'color', 'rgb(0,0,0)');
    });
  }
}
