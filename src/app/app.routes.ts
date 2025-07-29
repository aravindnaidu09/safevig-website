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
import { CompanyOverviewComponent } from './pages/about-us/company-overview/company-overview.component';
import { HistoryComponent } from './pages/about-us/history/history.component';
import { IndustryPartnerComponent } from './pages/about-us/industry-partner/industry-partner.component';
import { IntakeComponent } from './pages/products/intake/intake.component';
import { LiteratureComponent } from './pages/products/literature/literature.component';
import { L2aComponent } from './pages/products/l2a/l2a.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BaBeComponent } from './pages/ba-be/ba-be.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'babe', component: BaBeComponent},
  {path:'SVA', component: SvAgreementComponent},
  {path:'SVR', component: SvAggregateComponent},
  {path:'SVP', component: SvPsmfComponent},
  {path:'SVS', component: SvSignalComponent},
  {path:'SVI', component: IntakeComponent},
  {path:'SVL', component: LiteratureComponent},
  {path:'SVL2A', component: L2aComponent},
  {path:'TECH-SERV', component: TechServComponent},
  {path:'FUNC-SERV', component: FuncServComponent},
  {path:'CLNC-SERV', component: ClncServComponent},
  {path:'ABT-CMPY', component: CompanyOverviewComponent},
  {path:'ABT-HIST', component: HistoryComponent},
  {path:'ABT-IDPT', component: IndustryPartnerComponent},
  {path:'ALL-PROD', component: ProductsComponent},
  {path:'ALL-SERV', component: ServicesComponent},
  {path:'ALL-ABTS', component: AboutUsComponent},

  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: '' }
];

