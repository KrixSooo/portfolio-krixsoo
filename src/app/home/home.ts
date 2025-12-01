import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about';
import { ExperienceComponent } from '../experience/experience';
import { StackComponent } from '../stack/stack';
import { RevealDirective } from '../directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutComponent, ExperienceComponent, StackComponent, RevealDirective],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {}
