import { Component } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './certifications.html',
  styleUrls: ['./certifications.scss']
})
export class Certifications {}
