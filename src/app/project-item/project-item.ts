import { Component, Input } from '@angular/core';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './project-item.html',
  styleUrls: ['./project-item.scss'],
})
export class ProjectItem {
  @Input() title = '';
  @Input() description = '';
  @Input() link = '';
  @Input() image = '';
}
