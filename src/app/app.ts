import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { NgIf } from '@angular/common';
import { Splash } from './splash/splash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, NgIf, Splash],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('portfolio-krixsoo');
  readonly showSplash = signal(true);

  constructor() {
    // hide splash after a short delay on the client only
    if (typeof window !== 'undefined') {
      // extend splash duration so the user sees the effect
      setTimeout(() => this.showSplash.set(false), 4200);
    }
  }
}
