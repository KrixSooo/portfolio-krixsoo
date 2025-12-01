import { Directive, ElementRef, OnDestroy, NgZone, Input } from '@angular/core';

@Directive({
  selector: '[reveal]',
  standalone: true,
})
export class RevealDirective implements OnDestroy {
  private observer?: IntersectionObserver;
  /** If true, reveal only once and unobserve after first intersection. Default: false (toggle on enter/leave). */
  @Input('revealOnce') revealOnce = false;

  constructor(private el: ElementRef, private ngZone: NgZone) {
    // run outside Angular to avoid extra change detection
    this.ngZone.runOutsideAngular(() => {
      // IntersectionObserver is a browser API. Guard so SSR (Node) doesn't throw.
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as Element;
            if (entry.isIntersecting) {
              el.classList.add('in-view');
              if (this.revealOnce) {
                if (this.observer) this.observer.unobserve(entry.target);
              }
            } else {
              // when leaving viewport, remove the class unless revealOnce is set
              if (!this.revealOnce) {
                el.classList.remove('in-view');
              }
            }
          });
        },
        { threshold: 0.12 }
      );

      this.observer.observe(this.el.nativeElement as Element);
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }
}
