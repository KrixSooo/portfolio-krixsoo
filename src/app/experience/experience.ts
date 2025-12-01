import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss'],
})
export class ExperienceComponent {}
