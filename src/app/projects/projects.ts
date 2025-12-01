import { Component } from '@angular/core';
import { ProjectItem } from '../project-item/project-item';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectItem, RevealDirective],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss']
})
export class Projects {}
