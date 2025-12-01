import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { LegalComponent } from './legal/legal';
import { PrivacyComponent } from './privacy/privacy';
import { Skills } from './skills/skills';
import { Certifications } from './certifications/certifications';

export const routes: Routes = [
	{ path: '', component: Home },
  { path: 'skills', component: Skills },
  { path: 'certif', component: Certifications },
	{ path: 'projects', component: Projects },
	{ path: 'contact', component: Contact },
	{ path: 'legal', component: LegalComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: '**', redirectTo: '' }
];
