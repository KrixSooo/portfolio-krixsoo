import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent {}
