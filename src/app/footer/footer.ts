import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  // expose current year to template to avoid using `new` in template
  currentYear = new Date().getFullYear();
}
