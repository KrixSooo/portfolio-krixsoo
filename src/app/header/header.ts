import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  scrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = (window.scrollY || 0) > 16;
  }
}
