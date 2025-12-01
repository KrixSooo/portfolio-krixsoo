import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './stack.html',
  styleUrls: ['./stack.scss'],
})
export class StackComponent {}
