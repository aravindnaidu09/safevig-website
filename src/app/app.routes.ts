import { provideRoutes, Routes, withEnabledBlockingInitialNavigation } from '@angular/router';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HomeComponent } from './pages/home/home.component';
import { SvAgreementComponent } from './pages/products/sv-agreement/sv-agreement.component';
import { SvAggregateComponent } from './pages/products/sv-aggregate/sv-aggregate.component';
import { SvPsmfComponent } from './pages/products/sv-psmf/sv-psmf.component';
import { SvSignalComponent } from './pages/products/sv-signal/sv-signal.component';
import { TechServComponent } from './pages/services/tech-serv/tech-serv.component';
import { FuncServComponent } from './pages/services/func-serv/func-serv.component';
import { ClncServComponent } from './pages/services/clnc-serv/clnc-serv.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path:'SVA', component: SvAgreementComponent},
  {path:'SVR', component: SvAggregateComponent},
  {path:'SVP', component: SvPsmfComponent},
  {path:'SVS', component: SvSignalComponent},
  {path:'TECH-SERV', component: TechServComponent},
  {path:'FUNC-SERV', component: FuncServComponent},
  {path:'CLNC-SERV', component: ClncServComponent},
  {path:'ABT-CMPY', component: ClncServComponent},
  {path:'ABT-HIST', component: ClncServComponent},
  {path:'ABT-IDPT', component: ClncServComponent},

  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
];

