import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { NewsComponent } from './pages/news/news.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { SntbplusComponent } from './pages/sntbplus/sntbplus.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'sntbplus', component: SntbplusComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'properties', component: PropertiesComponent},
];


@NgModule({ imports: [RouterModule.forChild(routes)], exports: [RouterModule] }) export class PublicRoutingModule { }
