import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollContent') scrollContent: ElementRef | undefined;

  public scroll: any;
  ngOnInit() {
    const scrollContainer = document.querySelector('[data-scroll-container]');
    if (scrollContainer) {
      this.scroll = new LocomotiveScroll({
        el: scrollContainer as HTMLElement,
        smooth: true,
        getSpeed: true,
        getDirection: true,
      });
    }
  }

  ngAfterViewInit(): void {
    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach(() => {
        if (this.scroll) {
          this.scroll.update();
        }
      });
    });

    ro.observe(this.scrollContent?.nativeElement);
  }
}
